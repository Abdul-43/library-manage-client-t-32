import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  // Add more validation rules as needed
});

const BookForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title:</label>
          <Field type="text" id="title" name="title" className="form-control" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">Author:</label>
          <Field type="text" id="author" name="author" className="form-control" />
          <ErrorMessage name="author" component="div" className="error" />
        </div>
        {/* Add more form fields as needed */}
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Formik>
  );
};

export default BookForm;
