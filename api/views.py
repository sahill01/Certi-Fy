from django.http import JsonResponse, HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CertificateTemplate
from .serializers import CertificateTemplateSerializer
from django.shortcuts import get_object_or_404, render

def main(request):
    return render(request, 'template_selection.html')

@csrf_exempt
def generate_certificate(request):
    if request.method == 'POST':
        form_data = json.loads(request.body)
        recipient_name = form_data.get('recipientName')
        course_name = form_data.get('courseName')
        completion_date = form_data.get('completionDate')
        selected_template_id = form_data.get('selectedTemplate')

        # Get the selected template object from the database
        selected_template = get_object_or_404(CertificateTemplate, id=selected_template_id)

        # Create a PDF document
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{recipient_name}_certificate.pdf"'

        # Create a SimpleDocTemplate
        doc = SimpleDocTemplate(response, pagesize=letter)

        # Create a list to hold the flowables (content elements) of the document
        elements = []

        # Customize the content using the selected template information
        styles = getSampleStyleSheet()
        header_text = f'Certificate of Completion\n\n'
        recipient_text = f'This is to certify that {recipient_name}\nhas successfully completed the course:\n\n'
        course_text = f'{course_name}\n\n'
        completion_date_text = f'Completed on: {completion_date}\n\n'
        signature_text = f'Signature\nCourse Instructor'

        elements.append(Paragraph(header_text, styles['Title']))
        elements.append(Spacer(1, 12))
        elements.append(Paragraph(recipient_text, styles['Normal']))
        elements.append(Paragraph(course_text, styles['Normal']))
        elements.append(Paragraph(completion_date_text, styles['Normal']))
        elements.append(Spacer(1, 48))
        elements.append(Paragraph(signature_text, styles['Normal'], alignment=TA_CENTER))

        # Add the template image to the certificate
        template_image_path = selected_template.template_image.path  # Update this based on your model field
        elements.append(Image(template_image_path, width=400, height=300))  # Adjust width and height as needed

        # Build the document
        doc.build(elements)

        return response

    else:
        return JsonResponse({'error': 'Invalid request method. Only POST is allowed.'}, status=400)



class CertificateTemplateListView(APIView):
    def get(self, request):
        templates = CertificateTemplate.objects.all()
        serializer = CertificateTemplateSerializer(templates, many=True)
        return Response(serializer.data)
