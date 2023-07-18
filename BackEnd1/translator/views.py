from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import permissions
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_protect
from django.utils.decorators import method_decorator
from googletrans import Translator


class TranslatorView(APIView):
    permission_classes = (permissions.AllowAny, ) 
    
    def post(self, request, format=None):
               
        data = self.request.data
        text = data["text"]
        translator = Translator()

        try:
            out = translator.detect(text)

            if out.lang == "si":
                src_lang ="si"
                dest_lang = "en"
            elif out.lang == "en":
                src_lang = "en"
                dest_lang = "si"
                
            result = translator.translate(text,src=src_lang,dest=dest_lang)
            return Response({'translate':result.text})
        except:
            return Response({'error':'Translator Error'})