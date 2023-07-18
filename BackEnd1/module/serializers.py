from rest_framework import serializers
from .models import module

class moduleSerializer(serializers.ModelSerializer):
    class Meta:
        model=module
        fields = '__all__'