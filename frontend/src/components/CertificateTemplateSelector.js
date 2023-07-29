import React from 'react';

const CertificateTemplateSelector = ({ templateOptions, onSelectTemplate, selectedTemplate }) => {
  return (
    <div className="certificate-templates">
      {templateOptions.map((template) => (
        <div
          key={template.id}
          className={`certificate-template ${selectedTemplate === template.id ? 'selected' : ''}`}
          onClick={() => onSelectTemplate(template)}
        >
          <img src={template.thumbnail} alt={`Certificate Template ${template.id}`} width={150} height={100} />
        </div>
      ))}
    </div>
  );
};

export default CertificateTemplateSelector;
