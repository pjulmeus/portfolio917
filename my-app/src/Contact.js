import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './contact.css'

export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate("/")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='contact_div' ref={form} onSubmit={sendEmail}>
         <h1 className='header_text'>Contact Form</h1>
    <h4>Here you can contact me</h4>
      <label className="contact_label">Name</label> <br></br>
      <input className="contact_label label_height" type="text" name="user_name" /><br></br>
      <label className="contact_label">Email</label><br></br>
      <input className="contact_label label_height" type="email" name="user_email" /><br></br>
      <label className="contact_label">Message</label><br></br>
      <textarea className="contact_label text_area_size" name="message" /><br></br>
      <input type="submit" value="Send" /><br></br>
    </form>
  );
};

export default Contact