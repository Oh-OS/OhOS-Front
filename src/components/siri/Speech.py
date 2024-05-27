import openai
import time
import os
import playsound
import speech_recognition as sr
from gtts import gTTS

openai.api_key = ""

def log_to_file(content, filename='/Users/haewon/Desktop/project/OhOS/OhOS-Front/src/components/siri/conversation_logs.txt', mode='w'):
    with open(filename, mode) as file:  # mode 인자 추가
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
        except:
            pass
            time.sleep(3)

    return said

file_path = 'conversation_logs.txt'

with open(file_path, 'w') as f:
    f.write('')

if os.path.exists(file_path):
    print(f"{file_path} 파일이 성공적으로 생성되었습니다.")
else:
    print(f"{file_path} 파일이 생성되지 않았습니다.")

content = ''
voice_recognition_started = False
timeout_duration = 5

pages = {
    '지도': '/map',
    '번역': '/translation',
    '연락처': '/contacts',
    '버블': '/bubble',
    '날씨': '/weather',
    '비스코드': 'https://github.dev/github/dev',
    '비주얼스튜디오코드': 'https://github.dev/github/dev',
    '브이에스코드': 'https://github.dev/github/dev',
    '사파리': 'https://www.google.co.kr'
}

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
            break

        command = next((key for key in pages.keys() if key in prompt), None)
        action_keywords = ["열어", "켜", "틀어", "오픈", "보여", "이동", "옮겨"]

        if command and any(word in prompt for word in action_keywords):
            page = pages[command]
            content = page
            break

        try:
            messages = [
                {'role': 'system', 'content': 'You are a helpful assistant.'},
                {'role': 'user', 'content': content},
            ]
            messages.append({'role': 'assistant', 'content': 'You are a helpful assistant.' })
            messages.append({'role': 'user', 'content': prompt })
        except:
            messages = [
                {'role': 'system', 'content': 'You are a helpful assistant.'},
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