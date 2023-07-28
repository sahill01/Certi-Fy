from django.urls import path
from .views import CertificateTemplateListView, generate_certificate

urlpatterns = [
    path('templates/', CertificateTemplateListView.as_view(), name='certificate-template-list'),
    path('generate-certificate/', generate_certificate, name='generate-certificate'),
]
