/**
 *   Map Page
 *
 */

import React from 'react';
import { Map as LeafletMap, GeoJSON } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import { showDataOnMap } from './util';
function MapView({ countries, casesType, center, zoom }) {
  return (
    <div className="leaflet-container">
      <LeafletMap
        center={center}
        zoom={zoom}
        maxZoom={10}
        minZoom={2}
        attributionControl={false}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GeoJSON
          // attribution="&copy; credits due..."
          data={worldGeoJSON}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: '#121429',
            fillOpacity: 1,
          })}
        />

        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default MapView;
