from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
  return render(request, "hello/index.html")

def renan(request):
  return HttpResponse("hello renan")

def nicole(request):
  return HttpResponse("hello nicole")

def greet(request, name):
  return render(request, "hello/greet.html", {
    "name": name.capitalize()
  })