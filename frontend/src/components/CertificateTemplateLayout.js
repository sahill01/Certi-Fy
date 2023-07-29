import React from 'react';

const CertificateTemplateLayout = ({ recipientName, description, completionDate, selectedTemplate, xName, yName, xDescription, yDescription, xDate, yDate }) => {
  // Load the selected template dynamically based on selectedTemplate prop
  const templateUrl = `/frontend/templates/Template_${selectedTemplate}.pdf`;

  return (
    <div>
      {/* Render the selected certificate template */}
      <img src={templateUrl} alt={`Certificate Template ${selectedTemplate}`} />

      {/* Render the recipient name */}
      <div style={{ position: 'absolute', top: yName, left: xName }}>
        <p>{recipientName}</p>
      </div>

      {/* Render the description */}
      <div style={{ position: 'absolute', top: yDescription, left: xDescription }}>
        <p>{description}</p>
      </div>

      {/* Render the completion date */}
      <div style={{ position: 'absolute', top: yDate, left: xDate }}>
        <p>{completionDate}</p>
      </div>
    </div>
  );
};

export default CertificateTemplateLayout;
