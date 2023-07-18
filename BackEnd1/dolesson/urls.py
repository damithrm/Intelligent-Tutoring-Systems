from django.urls import path, include
from .views import GetdolessonView,UpdatedolessonView

urlpatterns = [
    
    path('Getdolesson',GetdolessonView.as_view()),
    path('updatedolesson',UpdatedolessonView.as_view())
]

