from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import EventSerializer,UserSerializer
from .models import  Event,User

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



@api_view(['POST'])
def CreateUser(request):
    
    serializer=UserSerializer(data=request.data)
    print(serializer.is_valid())
    if serializer.is_valid():
        serializer.save()
        print("success")

    return Response(serializer.data)




