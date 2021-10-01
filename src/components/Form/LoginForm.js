import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Button, Message } from 'semantic-ui-react'
import { useAuthDataContext } from 'app/providers/AuthProvider';
import { login } from "slices/user"
import * as yup from 'yup';

const LoginForm = (props) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const dispatch = useDispatch()
  const { onLogin } = useAuthDataContext();

  const hendleSubmit = async (data) => {
    setLoading(true)
    dispatch(login(data)).then((result) => {
      if(result.payload.data.success){
        onLogin()
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
      }}
      validationSchema={Validation}
      onSubmit={(values, onSubmitProps) => {
        hendleSubmit({
          email: values.email,
          password: values.password,
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
            <Button primary loading={loading} type="submit" className="login-red">Sign In</Button>
            <span onClick={() => props.switchSignUp()} className="signup-link">Already User? <span className="link"> Create an account</span></span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Validation = yup.object().shape({
  email: yup.string().email('Invalid email').required('Enter your email'),
  password: yup.string().required('Enter your password'),
});

export default LoginForm;
