from rest_framework import serializers

from .models import Event
from .models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields =['name','data','location','user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields =['name','password']