import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Button, Message } from 'semantic-ui-react'
import { registration } from "slices/user"
import * as yup from 'yup';

const SignUpForm = (props) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const hendleSubmit = async (data) => {
      setLoading(true)
      dispatch(registration(data)).then((result) => {
        if(result.payload.data.success){
          props.switchSignIn()
          props.setMessage("You have been successfully registered, please login")
        }
        else{
          setError(result.payload.data.errors)
        }
        setLoading(false)

      })
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }}
      validationSchema={Validation}
      onSubmit={(values, onSubmitProps) => {
        hendleSubmit({
          user: {
            email: values.email,
            password: values.password,
            first_name: values.firstName,
            last_name: values.lastName
          }
        });
      }}
    >
      {() => (
        <Form className="login-form">
          {error != null &&
            <Message className="error-message" negative>
              <Message.Header>{error}</Message.Header>
          </Message>
          }
           <div className="login-input">
            <Field type="text" name="firstName" placeholder="First Name" className="input-field" />
            <ErrorMessage
              name="firstName"
              render={(msg) => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>
          <div className="login-input">
            <Field type="text" name="lastName" placeholder="Last Name" className="input-field" />
            <ErrorMessage
              name="lastName"
              render={(msg) => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>
          <div className="login-input">
            <Field type="text" name="email" placeholder="Email" className="input-field" />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>
          <div className="login-input">
            <Field type="password" name="password" placeholder="Password" className="input-field" />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>
          <div className="action">
            <Button primary loading={loading} type="submit" className="login-red">Sign Up</Button>
            <span onClick={() => props.switchSignIn()} className="signup-link">Already User? <span className="link"> Sign In</span></span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Validation = yup.object().shape({
    firstName: yup.string().required('Enter your First Name'),
    lastName: yup.string().required('Enter your Last Name'),
    email: yup.string().email('Invalid email').required('Enter your email'),
    password: yup.string().required('Enter your password'),
});

export default SignUpForm;
