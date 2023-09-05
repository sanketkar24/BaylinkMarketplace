import React, { useEffect } from 'react';

function Map({ lat, lng }) {
  useEffect(() => {
    const apiKey = '8be57801c64058e81a0ce356d4dcf48c';
    console.log('lat', lat, "long", lng);
    const loadMap = () => {
      const script = document.createElement('script');
      script.src = `https://apis.mappls.com/advancedmaps/api/${apiKey}/map_sdk?layer=vector&v=3.0&callback=initMap1`;
      script.defer = true;
      script.async = true;

      window.initMap1 = initMap1;

      document.head.appendChild(script);
    };

    const initMap1 = () => {
      var map = new window.mappls.Map('map', {
        center: [lat, lng],
        zoomControl: true,
        location: true,
      });

      var marker1 = new window.mappls.Marker({
        map: map,
        position: {
          lat: lat,
          lng: lng,
        },
        fitbounds: true,
        icon_url: 'https://apis.mapmyindia.com/map_v3/1.png',
      });
    };
    //destroy html element that contains map
    const destroyMap = () => {
      const mapDiv = document.getElementById('map');
      if (mapDiv) {
        mapDiv.parentNode.removeChild(mapDiv);
      }
    };
  
    loadMap();

    // Clean up when the component unmounts
    return () => {
      delete window.initMap1;
      const mapScript = document.querySelector('script[src*="advancedmaps"]');
      if (mapScript) {
        mapScript.remove();
      }
    };
  }, [lat, lng]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default Map;
