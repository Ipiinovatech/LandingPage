"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MAPS_CONFIG, IPINNOVATECH_ADDRESS } from "@/lib/maps";
import { loadGoogleMaps } from "@/lib/maps-loader";
import { Loader2 } from "lucide-react";

export function Map() {
  const { language } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initializeMap = async () => {
      if (!mapRef.current || !isMounted) return;

      try {
        await loadGoogleMaps();
        
        const map = new google.maps.Map(mapRef.current, {
          center: MAPS_CONFIG.defaultCenter,
          zoom: MAPS_CONFIG.defaultZoom,
          styles: MAPS_CONFIG.styles,
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false,
          mapTypeControl: false,
        });

        new google.maps.Marker({
          position: MAPS_CONFIG.defaultCenter,
          map,
          title: "IPINNOVATECH",
        });

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(language === "es" ? "Error al cargar el mapa" : "Error loading map");
          setIsLoading(false);
        }
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
    };
  }, [language]);

  if (error) {
    return (
      <Card className="overflow-hidden">
        <div className="h-[400px] w-full flex items-center justify-center bg-red-50">
          <div className="text-center p-4">
            <p className="text-red-600 mb-2">{error}</p>
            <p className="text-gray-600 text-sm">
              {IPINNOVATECH_ADDRESS.street}<br />
              {IPINNOVATECH_ADDRESS.neighborhood}<br />
              {IPINNOVATECH_ADDRESS.city}, {IPINNOVATECH_ADDRESS.country}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="h-[400px] w-full relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400 mb-4" />
              <p className="text-gray-600">
                {language === "es" ? "Cargando mapa..." : "Loading map..."}
              </p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </Card>
  );
}