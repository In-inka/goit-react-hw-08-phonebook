import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="container d-flex justify-content-center mt-5">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(login(values));
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email
              </label>
              <Field
                name="email"
                className="form-control"
                id="exampleInputEmail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <Field
                name="password"
                className="form-control"
                id="exampleInputPassword"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
