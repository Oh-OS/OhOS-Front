import openai
import time
import os
import playsound
import speech_recognition as sr
from gtts import gTTS
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

openai.api_key = ""

def log_to_file(content, filename='/Users/haewon/Desktop/project/OhOS/OhOS-Front/src/components/siri/conversation_logs.txt', mode='w'):
    with open(filename, mode) as file:
        file.write(content + '\n')

def text_to_voice(text):
    tts = gTTS(text=text, lang='ko')
    filename = 'voice3.mp3'
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

def voice_to_text(timeout=None):
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("말해주세요: ")
        audio = r.listen(source)
        said = " "

        try:
            said = r.recognize_google(audio, language="ko-KR")
            print("당신의 말: ", said)
        except sr.UnknownValueError:
            print("음성을 인식할 수 없습니다.")
        except sr.RequestError:
            print("음성 인식 서비스에 접근할 수 없습니다.")
        except Exception as e:
            print(f"오류 발생: {e}")
        return said

file_path = 'conversation_logs.txt'

def initialize_log_file():
    with open(file_path, 'w') as f:
        f.write('')

initialize_log_file()

if os.path.exists(file_path):
    print(f"{file_path} 파일이 성공적으로 생성되었습니다.")
else:
    print(f"{file_path} 파일이 생성되지 않았습니다.")

content = ''
voice_recognition_started = False
timeout_duration = 5

pages = {
    '지도': 'http://localhost:3000/map',
    '번역': 'http://localhost:3000/translation',
    '연락처': 'http://localhost:3000/contacts',
    '버블': 'http://localhost:3000/bubble',
    '날씨': 'http://localhost:3000/weather',
    '비스코드': 'https://github.dev/github/dev',
    '비주얼스튜디오코드': 'https://github.dev/github/dev',
    '브이에스코드': 'https://github.dev/github/dev',
    '사파리': 'https://www.google.co.kr'
}

def create_prompt(user_input, context=""):
    return f"""
    당신은 Siri, 가상 비서입니다. 당신은 도움이 되고, 창의적이며, 영리하고 매우 친절합니다.
    사용자: {user_input}
    {context}
    """

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
driver.get("http://localhost:3000")

while True:
    if not voice_recognition_started:
        prompt = voice_to_text()
        if '시리야' in prompt:
            voice_recognition_started = True
            print("네?")
            text_to_voice("네?")
            log_to_file("네?")

    if voice_recognition_started:
        prompt = voice_to_text(timeout=timeout_duration)
        if not prompt:
            voice_recognition_started = False
            continue

        command = next((key for key in pages.keys() if key in prompt), None)
        action_keywords = ["열어", "켜", "틀어", "오픈", "보여", "이동", "옮겨"]

        if command and any(word in prompt for word in action_keywords):
            page = pages[command]
            content = page
            print(f"페이지로 이동: {page}")
            driver.get(page)
            voice_recognition_started = False
            continue

        try:
            messages = [
                {'role': 'system', 'content': '당신은 Siri, 가상 비서입니다. 당신은 도움이 되고, 창의적이며, 영리하고 매우 친절합니다.'},
                {'role': 'user', 'content': content},
            ]
            messages.append({'role': 'assistant', 'content': '당신은 Siri, 가상 비서입니다. 당신은 도움이 되고, 창의적이며, 영리하고 매우 친절합니다.' })
            messages.append({'role': 'user', 'content': prompt })
        except:
            messages = [
                {'role': 'system', 'content': '당신은 Siri, 가상 비서입니다. 당신은 도움이 되고, 창의적이며, 영리하고 매우 친절합니다.'},
                {'role': 'user', 'content': prompt},
            ]

        if '굿바이' in prompt:
            text_to_voice("시리를 종료합니다.")
            print("시리를 종료합니다.")
            log_to_file("시리를 종료합니다.")
            break

        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=messages
        )

        print("--------------------------------")
        print(str(response['choices'][0]['message']['content']).strip())
        msg = str(response['choices'][0]['message']['content']).strip()
        print("--------------------------------")

        log_to_file(msg)

        text_to_voice(msg)

        time.sleep(0.1)

        content = content + msg
