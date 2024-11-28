export const MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
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
    }
  ]
};

export const IPINNOVATECH_ADDRESS = {
  street: "Calle 15a # 103 - 20",
  neighborhood: "Ciudad Jardín",
  city: "Cali",
  country: "Colombia",
  coordinates: {
    lat: 3.3772,
    lng: -76.5392
  }
};