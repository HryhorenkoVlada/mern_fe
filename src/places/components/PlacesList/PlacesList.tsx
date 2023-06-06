import type { FC } from 'react';

import PlaceItem from '../PlaceItem/PlaceItem';
import { Button, Card } from 'src/shared/ui';
import { IPlace } from 'src/types/interfaces/place';

import './PlacesList.scss';

interface IPlacesListProps {
  places: IPlace[];
}

const PlacesList: FC<IPlacesListProps> = ({ places }) => {
  return places?.length ? (
    <ul className="place-list center">
      {places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        >
          {place.title}
        </PlaceItem>
      ))}
    </ul>
  ) : (
    <div className="place-list center">
      <Card>
        <h2 className="center">No places found. Maybe create one?</h2>
        <Button to="/places/new">Share Place</Button>
      </Card>
    </div>
  );
};

export default PlacesList;
