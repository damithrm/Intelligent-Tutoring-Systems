from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from django.contrib.auth.models import User
from rest_framework.response import Response
from user_profile.models import UserProfile
from .serializers import UserSerializer
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        user = self.request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({'isAthenticated':'success'})
            else:
                return Response({'isAthenticated':'error'})
        except:
            return Response({'error':'Something went wrong when authentication status'})



@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        
        data = self.request.data

        email =data['email']
        username = email
        # username = data['username']
        password = data['password']
        re_password = data['re_password']
        
        try:
            if password == re_password:
            
                if User.objects.filter(username=username).exists():
                    return Response({'error':'Username already exists'})
                else:
                    if len(password)<6:
                        return Response({'error':'Password must be at least 6 characters'})
                    else:
                        user = User.objects.create_user(username=username,email=email, password=password)
                        # user = User(username=username, password=password)
                        user.save()
                        
                        user = User.objects.get(id=user.id)
                        user_profile = UserProfile(user=user,first_name='',last_name='',phone='', city='')
                        user_profile.save()

                        return Response({'success':'User created successfully','user.id':user.id})
            
            else:
                return Response({'error':'Password do not match'})
        except:
                return Response({'error':'Something went wrong when registering account'})


@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data

        email =  data['email']
        username = email
        password = data['password']

        try:
            user = auth.authenticate(username=username, password=password)
           
            # login1 = request.data
            # user = authenticate(username=login1['username'], password=login1['password'])
            # return Response({'success':'User authenticated', 'username':username ,'password':password,'user':user})
    
            if user is not None:
                auth.login(request,user)
                # login1(request, user)
                return Response({'success':'User authenticated'})
            
            else:
                return Response({'error':'error Authenticated'})
        except:
                return Response({'error':'Something went wrong when logging in'})


class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'success':'Loggout out'})
        except:
            return Response({'error':'Something went wrong when loggin out '})


class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user
        try:
            user = User.objects.filter(id=user.id).delete()
            return Response({'success':'User deleted successfully'})
        except:
            return Response({'error':'Something went wrong when loggin out '})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({'success':'CSRF cookie set'})

class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        users = User.objects.all()

        users = UserSerializer(users,many=True)
        return Response(users.data)