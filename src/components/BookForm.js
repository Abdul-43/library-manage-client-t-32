import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
});

const BookForm = ({ initialValues, onSubmit }) => {

  return (
    <div>
      <h2>{initialValues ? 'Add Book' : 'Edit Book'}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <Field type="text" id="title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <Field type="text" id="author" name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;

