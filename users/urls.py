from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, GetMyDoc, Upload, DeleteDoc, Edit, GetAllDoc

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('mydoc', GetMyDoc.as_view()),
    path('upload', Upload.as_view()),
    path('delete', DeleteDoc.as_view()),
    path('edit', Edit.as_view()),
    path('all', GetAllDoc.as_view()),
]