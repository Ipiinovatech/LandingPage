"use client";

import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { IPINNOVATECH_ADDRESS } from "@/lib/maps";

const MapComponent = dynamic(
  () => import('./Map').then(mod => mod.Map),
  { 
    ssr: false,
    loading: () => <LoadingMap />
  }
);

function LoadingMap() {
  const { language } = useLanguage();
  return (
    <Card className="overflow-hidden">
      <div className="h-[400px] w-full flex items-center justify-center bg-gradient-to-b from-white to-[var(--bg-gradient-end)]">
        <div className="text-center p-4">
          <div className="text-gray-600 animate-pulse mb-4">
            {language === "es" ? "Cargando mapa..." : "Loading map..."}
          </div>
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

export function GoogleMap() {
  return <MapComponent />;
}