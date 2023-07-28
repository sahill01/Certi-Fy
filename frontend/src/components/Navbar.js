import React from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <nav id="navbar">
        <img src="./static/images/logo.png" alt="Logo" onClick={() => window.location.reload()} />
      <ul>
        <li>
        <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
        </li>
        <li class="dropdown">
          <a href="#services">Services</a>
          <ul class="sub-menu">
            <li>
              <Link
                activeClass="active"
                to="createCertificate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="validateCertificate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Validate
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;