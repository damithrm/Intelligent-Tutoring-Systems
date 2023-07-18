from rest_framework import serializers
from .models import questionBank

class questionBankSerializer(serializers.ModelSerializer):
    class Meta:
        model=questionBank
        fields = '__all__'
        