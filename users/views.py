from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User, Document
import jwt, datetime
from django.shortcuts import get_object_or_404, get_list_or_404
import json


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):

    def post(self, request):
        token = request.data['jwt']

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)

class GetMyDoc(APIView):
    def post(self, request):
        userName = request.data['name']
        user = get_object_or_404(User, name= userName)
        id = user.id
        docs = get_list_or_404(Document ,user_id = id)
        result = []
        for doc in docs:
            result.append(
                {
                    'id': doc.id,
                    'title': doc.title,
                    'content': doc.content,
                    'key': doc.key,
                    'user_id': doc.user_id
                }
            )

        
        return Response(result)

class GetAllDoc(APIView):
    def post(self, request):
        userName = request.data['name']
        user = get_object_or_404(User, name= userName)
        id = user.id
        docs = Document.objects.all().exclude(user_id = id)
        result = []
        for doc in docs:
            result.append(
                {
                    'id': doc.id,
                    'name': userName,
                    'title': doc.title,
                    'content': doc.content,
                    'key': doc.key,
                    'user_id': doc.user_id
                }
            )
        return Response(result) 

class Upload(APIView):
    def post(self, request):
        title = request.data['title']
        content = request.data['content']
        key = request.data['key']
        userName = request.data['name']
        user = get_object_or_404(User, name= userName)
        id = user.id

        document = Document(title = title, content = content, key = key, user_id = id)
        document.save()

        return Response({"messs": "save"})

class DeleteDoc(APIView):
    def post(self, request):
        title = request.data['title']
        doc = get_object_or_404(Document, title= title)
        doc.delete()

        return Response({"mess": "done"})

class Edit(APIView):
    def post(self, request):
        title = request.data['title']
        content = request.data['content']
        doc = get_object_or_404(Document, title = title)
        doc.content = content
        doc.save()

        return Response({"mess": "done"})



class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response