import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '../../../shared/ui';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
  VALIDATOR_REQUIRE,
} from '../../../utils/helpers/validators';
import { useForm } from '../../../hooks';
import { AuthContext } from '../../../context/authContext';

import './Auth.scss';

const SignUp = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const { formState, inputHandler } = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
      name: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const signInHandler = (event) => {
    event.preventDefault();
    console.log('SIGNING UP...', formState.inputs);
    auth.login();
    navigate('/');
  };

  return (
    <section className="form_wrapper">
      <h1 className="center title">Sign Up</h1>
      <form onSubmit={signInHandler}>
        <Input
          label="Name"
          id="name"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Name is required"
        />
        <Input
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Enter a valid email address"
          id="email"
        />
        <Input
          type="password"
          id="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_PASSWORD()]}
          errorText="Enter a valid password. It should be at least 9 characters long, contain at least 1 letter in each case, 1 number and 1 special character"
        />
        <div className="auth__footer">
          <Button className="" type="submit" disabled={!formState.isFormValid}>
            Sign Up
          </Button>
        </div>
      </form>
      <div className="center">
        <Button elemStyles="link" to="/sign_in">
          Already have an account?
        </Button>
      </div>
    </section>
  );
};

export default SignUp;
