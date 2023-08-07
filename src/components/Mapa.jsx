import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import markerIcon from '../assets/ubi.png';
import 'leaflet/dist/leaflet.css';

//para instalar leaflet: npm  i react-leaflet leaflet
//en contenido va cantidad censados, titulo la ciudad
//recibe una lista de marcas, cada una tiene un titulo, contenido y lat, lng, 
function Mapa({ markersData }) {
    // const center = [51.505, -0.09];
    const center = [-32.522779, -55.765835];
    const zoom = 6;
    const size = { minWidth: '400px', minHeight: '275px' }
    const urlTileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    return (
        <div >
            <div  >
                <MapContainer center={center} zoom={zoom} style={size}>
                    <TileLayer url={urlTileLayer} />
                    {markersData?.map(marker => {
                        // posicion es un arreglo de latitud longitud
                        const posMarker = [marker.lat, marker.lng];
                        //se crea una key unica para la marca, concatenando lat y lng
                        const keyMarker = `${marker.lat}-${marker.lng}`;
                        return (
                            // cada marca tiene una posicion en le mapa que se armo mas arriba
                            <Marker key={keyMarker} position={posMarker} icon={customMarkerIcon}>
                                <Popup>
                                    {/* define el titulo de la marca */}
                                    <h3>{marker.titulo}</h3>
                                    {/* contenido de la marca */}
                                    <p> {marker.contenido}</p>
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </div>
    )
}

export default Mapa