import { useRef, useEffect } from 'react';
import type { FC } from 'react';

import { darkModeMap } from 'src/utils/helpers/darkModeMapStyles';
import { ICoords } from 'src/types/interfaces/coords';

import './Map.scss';

interface IMapProps {
  center: ICoords;
  zoom: number;
  className?: string;
  style?: any;
}

const Map: FC<IMapProps> = ({ center, zoom, className = '', style = {} }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: darkModeMap,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return <div className={`map ${className}`} style={style} ref={mapRef}></div>;
};

export default Map;
