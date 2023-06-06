import { useReducer, useEffect } from 'react';
import type { FC, ChangeEvent } from 'react';

import { validate } from 'src/utils/helpers/validators';

import './Input.scss';

interface IInputState {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

interface IInputProps {
  label?: string;
  id: string;
  element?: 'input' | 'textarea';
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators?: any[];
  onInput: (id: string, value: string, isValid: boolean) => void;
  initialValue?: string;
  initialIsValid?: boolean;
}

const inputReducer = (state: IInputState, action: any) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value ?? '', action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input: FC<IInputProps> = ({
  label = '',
  id,
  element = 'input',
  type = 'text',
  placeholder = '',
  rows = 3,
  errorText = '',
  validators = [],
  onInput,
  initialValue = '',
  initialIsValid = false,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isValid: initialIsValid,
    isTouched: false,
  } as IInputState);
  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: 'CHANGE', value: event.target.value, validators });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [inputState.isValid, inputState.value, id, onInput]);

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      {element === 'input' ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      ) : (
        <textarea
          id={id}
          rows={rows}
          value={inputState.value}
          onBlur={touchHandler}
          onChange={changeHandler}
        />
      )}
      {!inputState.isValid && inputState.isTouched && (
        <p className="form-control__error-text">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
