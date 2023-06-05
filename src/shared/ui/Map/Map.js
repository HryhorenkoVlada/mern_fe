import { useRef, useEffect } from 'react';

import { darkModeMap } from '../../../utils/helpers/darkModeMapStyles';

import './Map.scss';

const Map = ({ center, zoom, className = '', style = {} }) => {
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
