import { useContext } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from 'src/shared/ui';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
} from 'src/utils/helpers/validators';
import { useForm } from 'src/hooks';
import { AuthContext } from 'src/context/authContext';
import { SignInDTO } from 'src/types/proto/dto/auth/signIn';

import './Auth.scss';

const SignIn = () => {
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
    },
    false
  );

  const signInHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: SignInDTO = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };
    console.log('SIGNING IN...', data);
    auth.login();
    navigate('/');
  };

  return (
    <section className="form_wrapper">
      <h1 className="center title">Sign In</h1>
      <form onSubmit={signInHandler}>
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
          <Button type="submit" disabled={!formState.isFormValid}>
            Sign In
          </Button>
        </div>
      </form>
      <div className="center">
        <Button elemStyles="link" to="/sign_up">
          Don't have an account? Sign Up
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
