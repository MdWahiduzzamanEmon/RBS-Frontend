import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contactFormStyles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <Card className={`${contactFormStyles.contactForm} mx-auto p-2 p-lg-5 shadow-md bg-white rounded border-0`}>
          <Card.Body>
            <Form>
              <h1 className='fs-1 fw-bold pb-4'>Send Us Message</h1>
              <Form.Group className="mb-3 outline-none" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control as='textarea' type="text" placeholder="Message" height="900px" />
              </Form.Group>
              <Button className={`${contactFormStyles.buttonGradient}`} type="submit">
                  Submit <FontAwesomeIcon icon={faArrowRight}/>
              </Button>
            </Form>
          </Card.Body>
        </Card>
    );
};

export default ContactForm;

