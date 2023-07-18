from django.shortcuts import render
from rest_framework import permissions
from questionBank import serializers
from .serializers import questionBankSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from questionBank.models import questionBank
# Create your views here.

class AddQuestion(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        
        data = self.request.data

        question = data['question']
        answerA = data['answerA']
        answerB = data['answerB']
        answerC = data['answerC']
        answerD = data['answerD']
        correctAnswer = data['correctAnswer']
        lessoneId = data['lessoneId']
        
        try:
            questionBank1 = questionBank(question=question, answerA=answerA, answerB=answerB, answerC=answerC, answerD=answerD, correctAnswer=correctAnswer, lessoneId_id=lessoneId)
            questionBank1.save()
            return Response({'success':'question added','question':question})
        except:
            return Response({'erorr':'something erorr'})


class SelectQuestion(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):

        try:
            questions = questionBank.objects.all()

            question = questionBankSerializer(questions,many=True)
            return Response(question.data)
        
        except:
            return Response({'erorr':'something erorr'})
        

    
        