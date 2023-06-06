import { useParams } from 'react-router-dom';

import { PlacesList } from '../../components';
import { DUMMY_PLACES } from 'src/utils/data/places';
import { IPlace } from 'src/types/interfaces/place';

const UserPlaces = () => {
  const { userId } = useParams();

  const loadedPlaces: IPlace[] = DUMMY_PLACES.filter(
    (place) => place.creator === userId
  );

  return <PlacesList places={loadedPlaces} />;
};

export default UserPlaces;
