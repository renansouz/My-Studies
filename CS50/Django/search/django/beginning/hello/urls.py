from django.urls import path

from . import views 

urlpatterns = [
  path("", views.index, name="index"),
  path("<str:name>", views.greet, name="greet"),
  path("renan", views.renan, name="renan"),
  path("nicole", views.nicole, name="nicole")
]