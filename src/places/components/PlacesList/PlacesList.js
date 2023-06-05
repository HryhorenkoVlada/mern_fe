import React from 'react';

import PlaceItem from '../PlaceItem/PlaceItem';
import { Button, Card } from '../../../shared/ui';

import './PlacesList.scss';

const PlacesList = ({ places }) => {
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
