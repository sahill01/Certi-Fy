from django.db import models

class CertificateTemplate(models.Model):
    name = models.CharField(max_length=100)
    template_image = models.ImageField(
        upload_to='frontend/templates/',
        default='path/to/default/template_image.png'
    )
    thumbnail = models.ImageField(upload_to='certificate_templates/thumbnails/')

    def __str__(self):
        return self.name
    
class Certificate(models.Model):
    recipient_name = models.CharField(max_length=100)
    description = models.TextField()
    completion_date = models.DateField()
    selected_template = models.ForeignKey(CertificateTemplate, on_delete=models.CASCADE)
    unique_code = models.CharField(max_length=100, unique=True)  # To store the unique code (JWT Token)
    
    def __str__(self):
        return f"{self.recipient_name}'s Certificate"
