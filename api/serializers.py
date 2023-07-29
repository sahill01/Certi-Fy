from rest_framework import serializers
from .models import Certificate, CertificateTemplate

class CertificateTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateTemplate
        fields = '__all__'

class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ['id', 'recipient_name', 'description', 'completion_date', 'selected_template', 'unique_code']
