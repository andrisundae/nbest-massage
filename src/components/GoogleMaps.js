import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => (
    <>
        <div className="pin" />
        <div className="pulse" />
    </>
);

const GoogleMaps = () => {
    const googleMapsKey = process.env.GATSBY_GOOGLE_ADDRESS_MAP_KEY;
    const mapConfig = {
        center: {
            lat: -8.666790460960932,
            lng: 115.13959159640112,
        },
        zoom: 11,
    };

    return (
        <div id="google-map-section" className="h-80 w-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapsKey }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
            >
                <Marker lat={mapConfig.center.lat} lng={mapConfig.center.lng} />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;