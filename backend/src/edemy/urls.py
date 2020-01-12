from django.contrib import admin
from django.urls import path

urlpatterns = [
    url('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls)
]
