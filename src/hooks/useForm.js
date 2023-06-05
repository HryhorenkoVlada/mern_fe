import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let isFormValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isFormValid,
      };
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isFormValid: action.formValidity,
      };
    case 'FORM_VALIDITY':
      return {};
    default:
      return state;
  }
};

export const useForm = (initialState = {}, initialFormValidity = false) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialState,
    isFormValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formValidity,
    });
  }, []);
  return { formState, inputHandler, setFormData };
};
