from django.urls import path, include
from .views import TranslatorView

urlpatterns = [
    path('translate',TranslatorView.as_view()),
]