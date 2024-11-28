export const MAPS_CONFIG = {
  defaultCenter: {
    lat: 3.3772,
    lng: -76.5392
  },
  defaultZoom: 15,
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }]
    }
  ]
};

export const IPINNOVATECH_ADDRESS = {
  street: "Calle 15a # 103 - 20",
  neighborhood: "Ciudad Jardín",
  city: "Cali",
  country: "Colombia"
};