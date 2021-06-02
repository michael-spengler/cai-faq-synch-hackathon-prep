import requests
import json
import os
import time
import parser
from dotenv import load_dotenv
load_dotenv()


class caiAPI():
    key=None
    secret=None
    host=None
    accessToken=None
    accessTokenExpiry=None

    def __init__(self):
        self.key=os.getenv('CLIENT_ID')
        self.secret=os.getenv('CLIENT_SECRET')
        self.host=os.getenv('AUTH_URL')

        try:
            self.accessToken=self.create_token()
            if self.accessToken is None:
                raise Exception("Request for access token failed")
        except Exception as e:
            print (e)
        else:
            self.accessTokenExpiry=time.time() + 43200

    def create_token(self):
        payload=f'grant_type=client_credentials&client_id={self.key}&client_secret={self.secret}'
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        try:
            response = requests.request("POST", self.host, headers=headers, data=payload)
            response.raise_for_status()
        except Exception as e:
            print (e)
            return None
        else:
            return json.loads(response.text)['access_token']

    class Decorators():
        @staticmethod
        def refreshToken(decorated):
            def wrapper(api,*args,**kwargs):
                if time.time() > api.accessTokenExpiry:
                    api.getAccessToken()
                return decorated(api,*args,**kwargs)

            return wrapper

    @Decorators.refreshToken
    def someRequest(self):
        userName=os.getenv('USER_NAME')
        botName=os.getenv('BOT_NAME')
        botVersion=os.getenv('BOT_VERSION')
        ksName=os.getenv('KNOWLEDGE_SOURCE_NAME')
        xToken=os.getenv('X-TOKEN')
        
        url = f"https://api.cai.tools.sap/train/v2/users/{userName}/bots/{botName}/versions/{botVersion}/qna/topic/knowledge_sources/{ksName}/answers"
        headers = {
        'x-token' : xToken,
        'Authorization' : 'Bearer '+ str(self.accessToken) ,
        'Content-Type': 'application/json'
        }
        payloads = parser.main()
        print(payloads)
        for payload in payloads:
            response = requests.request("POST", url, headers=headers, data=payload)
            print(response.text)


caiapi= caiAPI()

caiapi.someRequest()