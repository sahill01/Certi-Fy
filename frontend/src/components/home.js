import React from 'react';

const Home = () => {

  const handleScrollToCreateCertificate = () => {
    const createCertificateSection = document.getElementById('createCertificate');
    if (createCertificateSection) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const buffer = 0;
      const scrollToOffset = createCertificateSection.getBoundingClientRect().top - navbarHeight - buffer;

      window.scrollBy({
        top: scrollToOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="home-container" id="home">
        <div className="container_inner">
          <h1>Create / Customise / Verify your Certificate</h1>
          <ul className="custom-list">
                <li><h3>No Compromise With Quality</h3></li>
                <li>
                    <h3>Choose From Multiple Templates</h3>
                    <p>Select from a collection of different certificate designs and styles.</p>
                </li>
                <li>
                    <h3>No Design Skills Needed</h3>
                    <p>Easily customize the templates without any designing experience.</p>
                </li>
                <li>
                    <h3>Download For Free</h3>
                    <p>Download your customized certificate for free in high-resolution.</p>
                </li>
          </ul>
          <div className="card-actions">
          <button type="submit" className="create_certificate_button"  onClick={handleScrollToCreateCertificate}>
            GET STARTED
          </button>
        </div>
        </div>
    </div>
  );
};

export default Home;
