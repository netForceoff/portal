from django.urls import reverse_lazy
from django.views.generic import CreateView

from backend.users.forms import UserRegisterForm
from backend.users.models import User


class RegisterView(CreateView):
    model = User
    form_class = UserRegisterForm
    template_name = 'путь до шаблона'
    success_url = reverse_lazy('users:login')
