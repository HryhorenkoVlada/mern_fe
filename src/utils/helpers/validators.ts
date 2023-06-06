import { Validator } from 'src/types/interfaces/validator';
import { ValidatorType } from 'src/types/enums/validatoeType';

export const VALIDATOR_REQUIRE = () => ({ type: ValidatorType.REQUIRE });
export const VALIDATOR_FILE = () => ({ type: ValidatorType.FILE });
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: ValidatorType.MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: ValidatorType.MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val: number) => ({
  type: ValidatorType.MIN,
  val: val,
});
export const VALIDATOR_MAX = (val: number) => ({
  type: ValidatorType.MAX,
  val: val,
});
export const VALIDATOR_EMAIL = () => ({ type: ValidatorType.EMAIL });
export const VALIDATOR_PASSWORD = () => ({ type: ValidatorType.PASSWORD });

export const validate = (value: string, validators: Validator[]) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === ValidatorType.REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === ValidatorType.MINLENGTH && validator.val) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === ValidatorType.MAXLENGTH && validator.val) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === ValidatorType.MIN && validator.val) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === ValidatorType.MAX && validator.val) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === ValidatorType.EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === ValidatorType.PASSWORD) {
      isValid =
        isValid &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{9,}$/.test(
          value
        );
    }
  }
  return isValid;
};
