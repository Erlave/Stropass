from django.urls import path
# from .views import index
from . import views

urlpatterns = [
    path('', views.index , name='index'),
    path('about/',views.about),
    path('generate-password/',views.generate_password)
]