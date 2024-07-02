// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact Me</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values) => {
          console.log('Form data', values);
          // handle form submission
        }}
      >
        {() => (
          <Form>
            <Field name="name" placeholder="Name" />
            <Field name="email" type="email" placeholder="Email" />
            <Field name="message" component="textarea" placeholder="Message" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
`;

export default Contact;
