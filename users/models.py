from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Document(models.Model):
    user = models.ForeignKey(User, on_delete= models.SET_NULL, null= True)
    title = models.CharField(max_length=255, unique=True)
    content = models.CharField(max_length=255, unique=True)
    key = models.CharField(max_length=255)
    