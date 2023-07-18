from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import dolessonSerializer 
from .serializers import dolessonSerializer1 
from .models import dolesson
from lesson.models import lessone
from lesson.serializers import lessoneSerializer

class GetdolessonView(APIView):
    def post(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
            # data = self.request.data

            # user = User.objects.get(id = user.id)

            user_profile = dolesson.objects.get(userId_id=user.id)
            dolesson_profile = dolessonSerializer(user_profile)

            return Response({'profile': dolesson_profile.data ,'username': str(username)})
        except:
            return Response({'profile': 'something went wrong'})

class UpdatedolessonView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            data = self.request.data
            lessoneId = data['lessoneId']
            result = data['result']

            # user = User.objects.get(id = user.id)
            dolesson.objects.filter(userId_id=user.id).update(result=result, lessoneId_id=lessoneId)
            user_profile = dolesson.objects.get(userId_id=user.id)
            user_profile = dolessonSerializer(user_profile)

            return Response({'profile': user_profile.data ,'username': str(username)})
        except:
            return Response({'profile': 'something went wrong'})
