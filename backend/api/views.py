from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import EventSerializer,UserSerializer
from .models import  Event

# Create your views here.
@api_view(['Get'])
def apiOverview(request):
    api_urls={
        'All Event':'/all-events/',
        'User Event':'/user-events/<int:id>',
        'Create':'/create',
        'Update':'/event-update/<int:id>',
        'User':'/user'
    }
    return Response(api_urls)

@api_view(['GET'])
def ShowAll(request):
    events = Event.objects.all()
    serializer=EventSerializer(events,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ShowUserEvent(request,pk):
    events = Event.objects.get(id=pk)
    serializer=EventSerializer(events,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def Create(request):
    
    serializer=EventSerializer(data=request.data)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save()
        print("success")

    return Response(serializer.data)



# @api_view(['POST'])
# def CreateUser(request):
    
#     serializer=UserSerializer(data=request.data)
#     print(serializer.is_valid())
#     if serializer.is_valid():
#         serializer.save()
#         print("success")

#     return Response(serializer.data)




from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password


class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)