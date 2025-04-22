from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import random 
import string

def index (request):
    return render (request,'index.html')
def about (request):
    return HttpResponse ('hello from about')

def generate_password(request):
    length = int(request.GET.get('length', 16))
    use_upper = request.GET.get('upper') == 'true'
    use_lower = request.GET.get('lower') == 'true'
    use_numbers = request.GET.get('numbers') == 'true'
    use_symbols = request.GET.get('symbols') == 'true'

    characters = ''
    if use_lower:
        characters += string.ascii_lowercase
    if use_upper:
        characters += string.ascii_uppercase
    if use_numbers:
        characters += string.digits
    if use_symbols:
        characters += '!@#$%^&*()_+-=[]{}|;:,.<>?/'

    if not characters:
        return JsonResponse({'error': 'Please select at least one option!'}, status=400)

    password = ''.join(random.choice(characters) for _ in range(length))
    return JsonResponse({'password': password})


# Create your views here.
