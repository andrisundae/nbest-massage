import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GoogleMapReact from 'google-map-react';

const Marker = () => (
    <>
        <div className="pin" />
        <div className="pulse" />
    </>
);

const GoogleMaps = () => {
    const data = useStaticQuery(graphql`
    query SiteGoogleMapsKeyQuery {
      site {
        siteMetadata {
          secret {
            googleMapsKey
          }
        }
      }
    }
  `)
    const googleMapsKey = data.site.siteMetadata?.secret?.googleMapsKey;

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