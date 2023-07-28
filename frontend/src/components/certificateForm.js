import React, { useState, useEffect } from 'react';
import CertificateTemplates from './certificateTemplates';

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    courseName: '',
    completionDate: '',
    selectedTemplate: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/generate_certificate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Success! Certificate generated, handle response accordingly
        const pdfBlob = await response.blob();
        // Use 'pdfBlob' to display the PDF or provide a download link to the user.
        // For example, you can display the PDF in an iframe for the user to view.
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
      } else {
        // Handle error if certificate generation fails
        console.error('Certificate generation failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({ ...formData, selectedTemplate: template.id });
  };
  
  return (
    <form onSubmit={handleSubmit} className='certificateForm' id="createCertificate">
      <div>
        <h2>Enter Details</h2>
        <label htmlFor="recipientName">Recipient Name:</label>
        <input
          type="text"
          id="recipientName"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="completionDate">Completion Date:</label>
        <input
          type="date"
          id="completionDate"
          name="completionDate"
          value={formData.completionDate}
          onChange={handleChange}
        />
      </div>
      <h2>Choose a Certificate:</h2>
      <div className="certificate-templates">
          <CertificateTemplates onSelectTemplate={handleTemplateSelect} selectedTemplate={selectedTemplate} />
      </div>
      <div className="card-actions">
        <button type="submit">Create Certificate</button>
      </div>
    </form>
  );
};

export default CertificateForm;
