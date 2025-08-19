import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {


  const navigate = useNavigate()

  return (
    <div>
      <div className='Contact-container'>
        <h1 className="contact">Contact to get in touch with us</h1>
        <p>Get in touch and let us know how we can help.</p>
      </div>
      <div className="contact-btn">
        <button onClick={() => navigate("info")}>Contact Info</button>
        <button onClick={() => navigate("form")}>Contact Form</button>
      </div>
    </div>
  );
}

export default Contact