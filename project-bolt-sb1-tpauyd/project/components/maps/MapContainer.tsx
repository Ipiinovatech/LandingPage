"use client";

import { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const IPINNOVATECH_LOCATION = {
  lat: 3.3772,
  lng: -76.5392
};

export function MapContainer() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const loadMap = async () => {
      if (!mapRef.current) return;

      try {
        const { Map, Marker } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        
        const map = new Map(mapRef.current, {
          center: IPINNOVATECH_LOCATION,
          zoom: 15,
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
          ],
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false,
          mapTypeControl: false,
        });

        new Marker({
          position: IPINNOVATECH_LOCATION,
          map,
          title: 'IPINNOVATECH'
        });
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, []);

  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="h-[400px] w-full relative">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </Card>
  );
}