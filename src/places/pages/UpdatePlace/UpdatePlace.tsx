import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button, Card, Input } from 'src/shared/ui';
import { useForm } from 'src/hooks/useForm';
import { DUMMY_PLACES } from 'src/utils/data/places';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from 'src/utils/helpers/validators';
import { IPlace } from 'src/types/interfaces/place';

const UpdatePlace = () => {
  const { placeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { formState, inputHandler, setFormData } = useForm(
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

  useEffect(() => {
    const fetchPlace = async () => {
      setLoading(true);
      // TODO: Replace with real API call
      const place: IPlace = await new Promise((resolve, reject) => {
        const foundPlace = DUMMY_PLACES.find((place) => place.id === placeId);
        if (foundPlace) {
          resolve(foundPlace);
        } else {
          reject('Something went wrong, could not find a place.');
        }
      });
      if (!place) {
        setError('Something went wrong, could not find a place.');
      } else {
        setFormData(
          {
            title: {
              value: place.title,
              isValid: true,
            },
            description: {
              value: place.description,
              isValid: true,
            },
          },
          true
        );
      }
      setLoading(false);
    };

    fetchPlace();
  }, [placeId, setFormData]);

  if (loading) {
    return (
      <section className="center">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="place-list center">
        <Card>
          <h2>{error}</h2>
          <Button to="/places">Go Back</Button>
        </Card>
      </section>
    );
  }

  const handleEditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs);
    navigate(-1);
  };

  return (
    <section>
      <form className="form_wrapper" onSubmit={handleEditSubmit}>
        <Input
          id="title"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          initialValue={formState.inputs.title.value}
          initialIsValid={formState.inputs.title.isValid}
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialIsValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isFormValid}>
          Update Place
        </Button>
      </form>
    </section>
  );
};

export default UpdatePlace;
