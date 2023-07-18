import select
from django.urls import path, include
from .views import SelectLessone

urlpatterns = [
    path('selectLessone',SelectLessone.as_view()),
    
]