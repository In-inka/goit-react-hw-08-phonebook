import { useDispatch } from 'react-redux';
import { Btn, Label, MyStyledInput, SignUpForm } from './LoginForm.styled';
import { login } from 'redux/operations';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (value, { resetForm }) => {
      dispatch(login(value));
      resetForm();
    },
  });

  return (
    <>
      <div>
        <SignUpForm htmlFor="name" onSubmit={formik.handleSubmit}>
          <Label>
            <MyStyledInput
              type="text"
              autoFocus
              placeholder="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Label>
          <Label>
            <MyStyledInput
              type="password"
              autoFocus
              placeholder="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Label>
          <Btn type="submit">Login</Btn>
        </SignUpForm>
      </div>
    </>
  );
};

export default LoginForm;
