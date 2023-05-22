import { useEffect, useRef } from 'react';
import Script from 'next/script';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Coordenadas del centro del mapa
        zoom: 12, // Nivel de zoom inicial
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Puedes agregar más funcionalidad al mapa aquí

      // Limpia el mapa al desmontar el componente
      return () => {
        map.setMap(null);
      };
    };

    // Verifica si la API de Google Maps ya se ha cargado
    if (typeof google === 'undefined') {
      // Si no se ha cargado, espera a que se cargue y luego inicializa el mapa
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      // Si ya se ha cargado, inicializa el mapa directamente
      initializeMap();
    }
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" style={{ height: '400px' }} />
    </div>
  );
};

export default GoogleMap;