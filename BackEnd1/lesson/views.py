from django.shortcuts import render
from rest_framework import permissions
from .serializers import lessoneSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import lessone


class SelectLessone(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):

        try:
            questions = lessone.objects.all()

            question = lessoneSerializer(questions,many=True)
            return Response(question.data)
        
        except:
            return Response({'erorr':'something erorr'})
        

    