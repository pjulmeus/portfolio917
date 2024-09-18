import React from "react";
import { Form, Row } from "react-bootstrap";
import './contact.css'

function Contact () {
    return (
        <div className="contact_div">
            <h1>Contact Page</h1>
            <h6>Want to reach out with a message about hiring, 
                collaboration or friendship here is where to start!
                </h6>
                <Form>
      <Form.Group className="mb-3" controlId="contact_name">
        <Form.Label className="contact_label">
          Name :
        </Form.Label> 
          <Form.Control className="contact_label" type="text" placeholder="Place your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact_email">
            <Form.Label className="contact_label" >
            Email :
            </Form.Label><br></br>
          <Form.Control className="contact_label"  type="email" placeholder="Place your e-mail" /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact_title">
        <Form.Label className="contact_label">
          Title :
        </Form.Label>
        <Form.Control className="contact_label"  type="text" placeholder="Title of the message" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact_message">
        <Form.Label className="contact_label">Message :</Form.Label> 
        <Form.Control className="contact_label"  as="textarea" rows={3} />
      </Form.Group>
      </Form>
        </div>
    )
}

export default Contact;