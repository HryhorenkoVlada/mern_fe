import type { FormEvent } from 'react';

import { Button, Input } from 'src/shared/ui';
import { useForm } from 'src/hooks/useForm';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from 'src/utils/helpers/validators';
import { CreatePlaceDTO } from 'src/types/proto/dto/places/create';

const NewPlace = () => {
  const { formState, inputHandler } = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: CreatePlaceDTO = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
    };
    console.log(data);
  };

  return (
    <section>
      <form className="form_wrapper" onSubmit={placeSubmitHandler}>
        <Input
          type="text"
          id="title"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)"
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isFormValid}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default NewPlace;
