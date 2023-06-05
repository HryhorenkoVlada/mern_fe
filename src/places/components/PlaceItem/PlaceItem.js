import React, { useState } from 'react';

import { Button, Card, Modal, Map } from '../../../shared/ui';

import './PlaceItem.scss';

const PlaceItem = ({ id, title, description, coordinates, address, image }) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmModalHandler = () => setShowConfirmModal(true);

  const deletePlaceHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };

  const declineDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger onClick={openConfirmModalHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
      <Modal
        show={showMap}
        onCencel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content_map"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCencel={declineDeleteHandler}
        header={address}
        contentClass="place-item__modal-content_text"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button onClick={declineDeleteHandler}>CLOSE</Button>
            <Button danger onClick={deletePlaceHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? It can't be undone after
        </p>
      </Modal>
    </>
  );
};

export default PlaceItem;
