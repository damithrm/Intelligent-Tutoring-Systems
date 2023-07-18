import select
from django.urls import path, include
from .views import selectmodule

urlpatterns = [
    path('selectmodule',selectmodule.as_view()),
    
]