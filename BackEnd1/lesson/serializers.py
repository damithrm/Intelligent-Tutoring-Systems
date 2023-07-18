from rest_framework import serializers
from .models import lessone

class lessoneSerializer(serializers.ModelSerializer):
    class Meta:
        model=lessone
        fields = '__all__'