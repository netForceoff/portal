from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=30, unique=True, verbose_name='Почта')
    phone = models.CharField(max_length=20, verbose_name='Телефон', blank=True, null=True)
    cite = models.CharField(max_length=20, verbose_name='Город', blank=True, null=True)
    avatar = models.ImageField(upload_to='users', verbose_name='Аватар', blank=True, null=True)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f'{self.email}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

        permissions = {
            ('can_blocked_user', 'Can blocked user')
        }
