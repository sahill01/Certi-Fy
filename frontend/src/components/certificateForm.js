import React, { useState, useEffect } from 'react';
import CertificateTemplates from './certificateTemplates';

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    description: '',
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
      const response = await fetch('/api/generate-certificate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Success! Certificate generated, handle response accordingly
        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      } else {
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

  // const templateOptions = [
  //
  // ];
  
  return (
    <form onSubmit={handleSubmit} className='certificateForm' id="createCertificate">
      <h2>Choose a Certificate:</h2>
      <div className="certificate-templates">
          <CertificateTemplates onSelectTemplate={handleTemplateSelect} selectedTemplate={selectedTemplate} />
      </div>
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
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
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
      <div className="card-actions">
        <button type="submit">Create Certificate</button>
      </div>
    </form>
  );
};

export default CertificateForm;
