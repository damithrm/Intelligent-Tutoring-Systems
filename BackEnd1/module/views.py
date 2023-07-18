from django.shortcuts import render
from rest_framework import permissions
from .serializers import moduleSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import module


class selectmodule(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):

        try:
            questions = module.objects.all()

            question = moduleSerializer(questions,many=True)
            return Response(question.data)
        
        except:
            return Response({'erorr':'something erorr'})
        
