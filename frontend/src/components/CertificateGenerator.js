import React from 'react';
import CertificateTemplateLayout from './CertificateTemplateLayout';

const CertificateGenerator = ({ recipientName, description, completionDate, selectedTemplate }) => {
 
  const xName = 100;
  const yName = 200;
  const xDescription = 100;
  const yDescription = 300;
  const xDate = 100;
  const yDate = 400;

  return (
    <div>
      <CertificateTemplateLayout
        recipientName={recipientName}
        description={description}
        completionDate={completionDate}
        selectedTemplate={selectedTemplate}
        xName={xName}
        yName={yName}
        xDescription={xDescription}
        yDescription={yDescription}
        xDate={xDate}
        yDate={yDate}
      />
    </div>
  );
};

export default CertificateGenerator;
