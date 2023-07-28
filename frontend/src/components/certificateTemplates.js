import React, { useState, useEffect } from 'react';

const CertificateTemplates = ({ onSelectTemplate, selectedTemplate }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Fetch the available certificate templates from the backend
    fetch('/api/templates/')
      .then((response) => response.json())
      .then((data) => setTemplates(data))
      .catch((error) => console.error('Error fetching templates:', error));
  }, []);

  return (
    <>
      {templates.map((template) => (
        <div key={template.id} className={`certificate-template ${selectedTemplate && selectedTemplate.id === template.id ? 'selected' : ''}`}>
          <img
            src={template.thumbnail}
            alt={`Certificate Template ${template.id}`}
            width={150}
            height={100}
            onClick={() => onSelectTemplate(template)}
          />
        </div>
      ))}
    </>
  );
};

export default CertificateTemplates;
