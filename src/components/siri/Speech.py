import openai
from config import *
import time
openai.api_key = ""

import speech_recognition as sr
from gtts import gTTS
import os
import time
import playsound

def textToVoice(text):
     tts = gTTS(text=text, lang='ko')
     filename='voice3.mp3'
     tts.save(filename)
     playsound.playsound(filename)
     os.remove(filename)

def voiceToText(timeout=None):
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("say something: ")
        audio = r.listen(source)
        said = " "

        try:
            said = r.recognize_google(audio, language="ko-KR")
            print("Your speech thinks like: ", said)
        except:
            pass
            time.sleep(3)
    
    return said

content = ''
voice_recognition_started = False
timeout_duration = 5 

pages = {
    '지도': '/map',
    '번역': '/translation',
    '연락처': '/contacts',
    '버블': '/bubble',
    '날씨': '/weather',
    '비스코드': '/visual_studio_code',
    '비주얼스튜디오코드': '/visual_studio_code',
    '브이에스코드': '/visual_studio_code',
    '사파리': '/safari'
}

while True:
    if not voice_recognition_started:
        prompt = voiceToText()
        if '시리야' in prompt:
            voice_recognition_started = True
            print("네?")
            textToVoice("네?")

    if voice_recognition_started:
        prompt = voiceToText(timeout=timeout_duration)
        if not prompt:
            break

        command = next((key for key in pages.keys() if key in prompt), None)
        action_keywords = ["열어", "켜", "틀어", "오픈", "보여"]

        if command and any(word in prompt for word in action_keywords):
            page = pages[command] 
            # textToVoice(f"{command}로 이동하겠습니다.")
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
            textToVoice("시리를 종료합니다.")
            print("시리를 종료합니다.")
            break

        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=messages
        )

        print("--------------------------------")
        print(str(response['choices'][0]['message']['content']).strip())
        msg = str(response['choices'][0]['message']['content']).strip()
        print("--------------------------------")


        textToVoice(msg)

        time.sleep(0.1)

        content = content + msg


# import openai
# from config import *
# import time
# openai.api_key = 

# import speech_recognition as sr
# from gtts import gTTS
# import os
# import time
# import playsound

# def textToVoice(text):
#      tts = gTTS(text=text, lang='ko')
#      filename='voice3.mp3'
#      tts.save(filename) 
#      playsound.playsound(filename) 
#      os.remove(filename)


# def voiceToText():
#     r = sr.Recognizer()
#     with sr.Microphone() as source:
#         print("say something: ")
#         audio = r.listen(source)
#         said = " "

#         try:
#             said = r.recognize_google(audio, language="ko-KR")
#             print("Your speech thinks like: ", said)
#         except:
#             pass
#             time.sleep(3)
    
#     return said


# print("chatGPT를 종료하려면 '굿바이'라고 말하세요.")
# textToVoice("chatGPT를 종료하려면 '굿바이'라고 말하세요.\n")

# content = ''

# while True:

#     prompt = voiceToText()
   
#     try:
#         messages = [
#                 {'role': 'system', 'content': 'You are a helpful assistant.'},
#                 {'role': 'user', 'content': content},
#             ]
#         messages.append({'role': 'assistant', 'content': 'You are a helpful assistant.' })

#         messages.append({'role': 'user', 'content': prompt })
#     except:
#         messages = [
#                 {'role': 'system', 'content': 'You are a helpful assistant.'},
#                 {'role': 'user', 'content': prompt},
#             ]

#     if '굿바이' in prompt:
#         textToVoice("chatGPT를 종료합니다.")
#         print("chatGPT를 종료합니다.")
#         break

#     response = openai.ChatCompletion.create(
#         model='gpt-3.5-turbo',
#         messages=messages
#     )

#     print("--------------------------------")
#     print(str(response['choices'][0]['message']['content']).strip())
#     msg = str(response['choices'][0]['message']['content']).strip()
#     print("--------------------------------")


#     textToVoice(msg)

#     time.sleep(0.1)

#     content = content + msg
