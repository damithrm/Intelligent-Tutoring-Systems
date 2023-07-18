import select
from django.urls import path, include
from questionBank.views import AddQuestion, SelectQuestion

urlpatterns = [
    path('addquestion',AddQuestion.as_view()),
    path('selectquestion',SelectQuestion.as_view()),

    
]