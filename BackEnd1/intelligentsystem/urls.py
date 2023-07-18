# from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('api-auth/',include('rest_framework.urls')),
    path('accounts/',include('accounts.urls')),
    path('profile/',include('user_profile.urls')),
    path('questionBank/',include('questionBank.urls')),
    path('grammar-checker/',include('grammar_checker.urls')),
    path('grammar-checker-sp/',include('grammar_checker_sp.urls')),
    path('translator/',include('translator.urls')),
    path('dolesson/',include('dolesson.urls')),
    path('lesson/',include('lesson.urls')),
    path('module/',include('module.urls')),

]

urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]