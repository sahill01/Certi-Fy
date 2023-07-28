import React, { useState } from 'react';

const CertificateValidationForm = () => {
  const [certificateCode, setCertificateCode] = useState('');

  const handleInputChange = (e) => {
    setCertificateCode(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your validation logic here and handle the form submission
    // For example, you can use the certificateCode to validate the certificate.
  };

  return (
    <div className="validationCard" id="validateCertificate">
      <form className="card-form" onSubmit={handleFormSubmit}>
        <div className="card-header">
          <h1 className="card-title">Verify a Certificate</h1>
        </div>
        <div className="card-content">
          <label htmlFor="certificate-code">Enter your certificate code:</label>
          <input
            type="text"
            id="certificate-code"
            name="code"
            value={certificateCode}
            onChange={handleInputChange}
            autoFocus
            required
          />
        </div>
        <div className="card-actions">
          <button type="submit" className="certification-validation__button">
            VALIDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertificateValidationForm;
