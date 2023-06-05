import { useReducer, useEffect } from 'react';

import { validate } from '../../../utils/helpers/validators';

import './Input.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
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

const Input = ({
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
  });
  const changeHandler = (event) => {
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
