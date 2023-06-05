import { useParams } from 'react-router-dom';

import { PlacesList } from '../../components';
import { DUMMY_PLACES } from '../../../utils/data/places';

const UserPlaces = () => {
  const { userId } = useParams();

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlacesList places={loadedPlaces} />;
};

export default UserPlaces;
