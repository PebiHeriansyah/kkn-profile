"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Polygon,
  Polyline,
  useMap,
  useMapEvents
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

// Custom marker icons
const createCustomIcon = (color = 'blue', size = 'medium') => {
  const sizes: Record<string, [number, number]> = {
    small: [20, 32],
    medium: [25, 41],
    large: [30, 50]
  };
  
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: sizes[size],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Map event handler component
const MapEvents = ({ onMapClick, onLocationFound }: any) => {
  const map = useMapEvents({
    click: (e) => {
      onMapClick && onMapClick(e.latlng);
    },
    locationfound: (e) => {
      onLocationFound && onLocationFound(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return null;
};

// Custom control component
const CustomControls = ({ onLocate, onToggleLayer, layers }: any) => {
  const map = useMap();

  useEffect(() => {
    const control = new L.Control({ position: 'topright' });
    
    control.onAdd = () => {
      const div = L.DomUtil.create('div', 'custom-controls');
      div.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
          <button id="locate-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer; color: black; background: #f0f0f0;">📍 Locate Me</button>
          <button id="satellite-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer; color: black; background: #f0f0f0;">🛰️ Satellite</button>
          <button id="traffic-btn" style="margin: 2px; padding: 8px; border: none; border-radius: 3px; cursor: pointer; color: black; background: #f0f0f0;">🚦 Traffic</button>
        </div>
      `;
      
      L.DomEvent.disableClickPropagation(div);
      
      const locateBtn = div.querySelector('#locate-btn');
      const satelliteBtn = div.querySelector('#satellite-btn');
      const trafficBtn = div.querySelector('#traffic-btn');
      
      if (locateBtn) (locateBtn as HTMLElement).onclick = () => onLocate();
      if (satelliteBtn) (satelliteBtn as HTMLElement).onclick = () => onToggleLayer('satellite');
      if (trafficBtn) (trafficBtn as HTMLElement).onclick = () => onToggleLayer('traffic');
      
      return div;
    };

    control.addTo(map);

    return () => {
      control.remove();
    };
  }, [map, onLocate, onToggleLayer]);

  return null;
};

// Search component
const SearchControl = ({ onSearch }: any) => {
  const [query, setQuery] = useState('');
  const map = useMap();

  const handleSearch = async (currentQuery: string) => {
    if (!currentQuery.trim()) return;

    try {
      // Using Nominatim API for geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(currentQuery)}`
      );
      const results = await response.json();
      
      if (results.length > 0) {
        const { lat, lon, display_name } = results[0];
        const latLng: [number, number] = [parseFloat(lat), parseFloat(lon)];
        map.flyTo(latLng, 13);
        onSearch && onSearch({ latLng, name: display_name });
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  useEffect(() => {
    const control = new L.Control({ position: 'topleft' });
    
    control.onAdd = () => {
      const div = L.DomUtil.create('div', 'search-control');
      div.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); display: flex; gap: 5px;">
          <input 
            id="search-input" 
            type="text" 
            placeholder="Search places..." 
            style="padding: 8px; border: 1px solid #ddd; border-radius: 3px; width: 200px; color: black;"
          />
          <button 
            id="search-btn" 
            style="padding: 8px 12px; border: none; border-radius: 3px; cursor: pointer; background: #007bff; color: white;"
          >
            🔍
          </button>
        </div>
      `;
      
      L.DomEvent.disableClickPropagation(div);
      
      const input = div.querySelector('#search-input') as HTMLInputElement;
      const button = div.querySelector('#search-btn');
      
      if (input) {
        input.addEventListener('input', (e) => setQuery((e.target as HTMLInputElement).value));
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') handleSearch(input.value);
        });
      }
      
      if (button && input) {
        button.addEventListener('click', () => handleSearch(input.value));
      }
      
      return div;
    };

    control.addTo(map);

    return () => {
      control.remove();
    };
  }, [map]); // intentionally omitted handleSearch to avoid recreation of control

  return null;
};

// Main AdvancedMap component
export const AdvancedMap = ({
  center = [51.505, -0.09],
  zoom = 13,
  markers = [],
  polygons = [],
  circles = [],
  polylines = [],
  onMarkerClick,
  onMapClick,
  enableClustering = true,
  enableSearch = true,
  enableControls = true,
  enableDrawing = false,
  mapLayers = {
    openstreetmap: true,
    satellite: false,
    traffic: false
  },
  className = '',
  style = { height: '500px', width: '100%', zIndex: 1 }
}: any) => {
  const [currentLayers, setCurrentLayers] = useState<any>(mapLayers);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [searchResult, setSearchResult] = useState<any>(null);
  const [clickedLocation, setClickedLocation] = useState<any>(null);
  const [routePolyline, setRoutePolyline] = useState<any>(null);

  // Handle layer toggling
  const handleToggleLayer = useCallback((layerType: string) => {
    setCurrentLayers((prev: any) => ({
      ...prev,
      [layerType]: !prev[layerType]
    }));
  }, []);

  // Handle geolocation
  const handleLocate = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      alert('Geolokasi tidak didukung oleh browser Anda.');
    }
  }, []);

  // Get route from user to destination
  const handleGetRoute = useCallback(async () => {
    if (!navigator.geolocation) {
      alert('Geolokasi tidak didukung oleh browser Anda.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        
        try {
          const destLat = center[0];
          const destLng = center[1];
          // OSRM expects longitude,latitude
          const response = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${longitude},${latitude};${destLng},${destLat}?geometries=geojson`
          );
          const data = await response.json();
          
          if (data.routes && data.routes.length > 0) {
            // GeoJSON coordinates are [lon, lat], Leaflet needs [lat, lon]
            const coords = data.routes[0].geometry.coordinates.map((coord: any) => [coord[1], coord[0]]);
            setRoutePolyline({
              id: 'route',
              positions: coords,
              style: { color: '#0ea5e9', weight: 4, opacity: 0.8 },
              popup: `Jarak: ${(data.routes[0].distance / 1000).toFixed(2)} km, Waktu: ${Math.round(data.routes[0].duration / 60)} menit`
            });
          }
        } catch (error) {
          console.error('Gagal mendapatkan rute:', error);
          alert('Gagal mendapatkan rute, silakan coba lagi.');
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Gagal mendapatkan lokasi Anda. Pastikan izin lokasi diberikan.');
      }
    );
  }, [center]);

  // Expose routing function via custom controls or map click
  useEffect(() => {
    // We can dispatch a custom event or pass this handler up, but for now we'll listen to a custom window event
    const handleRouteEvent = () => handleGetRoute();
    window.addEventListener('request-route', handleRouteEvent);
    return () => window.removeEventListener('request-route', handleRouteEvent);
  }, [handleGetRoute]);

  // Handle map click
  const handleMapClick = useCallback((latlng: any) => {
    setClickedLocation(latlng);
    onMapClick && onMapClick(latlng);
  }, [onMapClick]);

  // Handle search results
  const handleSearch = useCallback((result: any) => {
    setSearchResult(result);
  }, []);

  return (
    <div className={`advanced-map ${className}`} style={style}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        scrollWheelZoom={true}
      >
        {/* Base tile layers */}
        {currentLayers.openstreetmap && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}
        
        {currentLayers.satellite && (
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        )}

        {/* Map events */}
        <MapEvents
          onMapClick={handleMapClick}
          onLocationFound={setUserLocation}
        />

        {/* Search control */}
        {enableSearch && <SearchControl onSearch={handleSearch} />}

        {/* Custom controls */}
        {enableControls && (
          <CustomControls
            onLocate={handleLocate}
            onToggleLayer={handleToggleLayer}
            layers={currentLayers}
          />
        )}

        {/* Markers with clustering */}
        {enableClustering ? (
          <MarkerClusterGroup>
            {markers.map((marker: any, index: number) => (
              <Marker
                key={marker.id || index}
                position={marker.position}
                icon={marker.icon || createCustomIcon(marker.color, marker.size)}
                eventHandlers={{
                  click: () => onMarkerClick && onMarkerClick(marker)
                }}
              >
                {marker.popup && (
                  <Popup>
                    <div>
                      <h3 className="font-bold text-lg">{marker.popup.title}</h3>
                      <p className="mb-2">{marker.popup.content}</p>
                      {marker.popup.image && (
                        <img 
                          src={marker.popup.image} 
                          alt={marker.popup.title}
                          style={{ maxWidth: '200px', height: 'auto', borderRadius: '4px' }}
                        />
                      )}
                    </div>
                  </Popup>
                )}
              </Marker>
            ))}
          </MarkerClusterGroup>
        ) : (
          markers.map((marker: any, index: number) => (
            <Marker
              key={marker.id || index}
              position={marker.position}
              icon={marker.icon || createCustomIcon(marker.color, marker.size)}
              eventHandlers={{
                click: () => onMarkerClick && onMarkerClick(marker)
              }}
            >
              {marker.popup && (
                <Popup>
                  <div>
                    <h3 className="font-bold">{marker.popup.title}</h3>
                    <p>{marker.popup.content}</p>
                  </div>
                </Popup>
              )}
            </Marker>
          ))
        )}

        {/* User location marker */}
        {userLocation && (
          <Marker 
            position={userLocation}
            icon={createCustomIcon('red', 'medium')}
          >
            <Popup>Your current location</Popup>
          </Marker>
        )}

        {/* Search result marker */}
        {searchResult && (
          <Marker 
            position={searchResult.latLng}
            icon={createCustomIcon('green', 'large')}
          >
            <Popup>{searchResult.name}</Popup>
          </Marker>
        )}

        {/* Clicked location marker */}
        {clickedLocation && (
          <Marker 
            position={[clickedLocation.lat, clickedLocation.lng]}
            icon={createCustomIcon('orange', 'small')}
          >
            <Popup>
              Lat: {clickedLocation.lat.toFixed(6)}<br/>
              Lng: {clickedLocation.lng.toFixed(6)}
            </Popup>
          </Marker>
        )}

        {/* Polygons */}
        {polygons.map((polygon: any, index: number) => (
          <Polygon
            key={polygon.id || index}
            positions={polygon.positions}
            pathOptions={polygon.style || { color: 'purple', weight: 2, fillOpacity: 0.3 }}
          >
            {polygon.popup && <Popup>{polygon.popup}</Popup>}
          </Polygon>
        ))}

        {/* Circles */}
        {circles.map((circle: any, index: number) => (
          <Circle
            key={circle.id || index}
            center={circle.center}
            radius={circle.radius}
            pathOptions={circle.style || { color: 'blue', weight: 2, fillOpacity: 0.2 }}
          >
            {circle.popup && <Popup>{circle.popup}</Popup>}
          </Circle>
        ))}

        {/* Polylines */}
        {polylines.map((polyline: any, index: number) => (
          <Polyline
            key={polyline.id || index}
            positions={polyline.positions}
            pathOptions={polyline.style || { color: 'red', weight: 3 }}
          >
            {polyline.popup && <Popup>{polyline.popup}</Popup>}
          </Polyline>
        ))}

        {/* Route Polyline (OSRM) */}
        {routePolyline && (
          <Polyline
            key={routePolyline.id}
            positions={routePolyline.positions}
            pathOptions={routePolyline.style}
          >
            {routePolyline.popup && <Popup>{routePolyline.popup}</Popup>}
          </Polyline>
        )}
      </MapContainer>
    </div>
  );
};
