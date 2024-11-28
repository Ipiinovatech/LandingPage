"use client";

import { useLoadScript, GoogleMap as GoogleMapComponent, Marker } from "@react-google-maps/api";
import { Card } from "@/components/ui/card";

const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }]
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }]
  }
];

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Coordinates for Calle 15a # 103 - 20, Ciudad Jardín, Cali, Colombia
  const center = {
    lat: 3.3772,  // Updated coordinates for Ciudad Jardín, Cali
    lng: -76.5392
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (!isLoaded) {
    return (
      <Card className="overflow-hidden">
        <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Loading map...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="h-[400px] w-full">
        <GoogleMapComponent
          zoom={15}
          center={center}
          mapContainerClassName="w-full h-full"
          options={options}
        >
          <Marker position={center} />
        </GoogleMapComponent>
      </div>
    </Card>
  );
}