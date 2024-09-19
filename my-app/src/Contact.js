import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l143pmm', 'template_5kqfji8', form.current, {
        publicKey: 'DUYsx23QIhZ6s03EG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
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