// src/components/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    // Save data to local storage (temporary solution)
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push(values);
    localStorage.setItem('formData', JSON.stringify(formData));
    resetForm();
  };

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <Field
                name="message"
                component="textarea"
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
