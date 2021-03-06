"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from users.views import GoogleLogin

from users.views import CustomUserViewSet
from school.views import SchoolViewSet

from game_room.views import GameRoomViewSet, TeamViewSet, QueueUp

from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^account/', include('allauth.urls')),
    path('auth/google', GoogleLogin.as_view(), name='google_login'),
    path('queue_up', QueueUp.as_view(), name='queue up')
]

router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='user')
router.register(r'schools', SchoolViewSet, basename='school')
router.register(r'game_room', GameRoomViewSet, basename='game_room')
router.register(r'team', TeamViewSet, basename='team')

urlpatterns += router.urls