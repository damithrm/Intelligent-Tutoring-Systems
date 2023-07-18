from rest_framework import serializers
from .models import dolesson

class dolessonSerializer(serializers.ModelSerializer):
    class Meta:
        model=dolesson
        fields = '__all__'

class dolessonSerializer1(serializers.ModelSerializer):
    class Meta:
        model=dolesson
        fields = ('id','result','userId','lessoneId')