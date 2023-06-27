// import React from 'react'

import Button from "./Button";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1>Contact Me</h1>
            <p>prabhuamkarki4@gmail.com</p>
            <Button />
          </div>
          <div className="contact-right">
            <form action="/" className="form-content">
              <input type="text" name="Name" placeholder="Your Name" />
              <input type="email" name="Email" placeholder="Your Email" />

              <textarea name="Message" id="" cols="" rows="6"></textarea>
              <Button />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
