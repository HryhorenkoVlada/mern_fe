import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICoords } from 'src/types/interfaces/coords';
import { Button, Card, Modal, Map } from 'src/shared/ui';

import './PlaceItem.scss';
import { DeletePlaceDTO } from 'src/types/proto/dto/places/delete';

interface IPlaceItemProps {
  id: string;
  title: string;
  description: string;
  coordinates: ICoords;
  address: string;
  image: string;
  creatorId: string;
}

const PlaceItem: FC<PropsWithChildren<IPlaceItemProps>> = ({
  id,
  title,
  description,
  coordinates,
  address,
  image,
}) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigate = useNavigate();

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmModalHandler = () => setShowConfirmModal(true);

  const deletePlaceHandler = () => {
    setShowConfirmModal(false);
    const data: DeletePlaceDTO = {
      id,
    };
    console.log('DELETING...', data);
  };

  const declineDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const editPlaceHandler = () => {
    navigate(`/places/${id}/edit`);
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
            <Button onClick={editPlaceHandler}>EDIT</Button>
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
