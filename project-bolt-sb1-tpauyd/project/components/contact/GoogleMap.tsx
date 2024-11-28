"use client";

import dynamic from 'next/dynamic';
import { Card } from "@/components/ui/card";

const Map = dynamic(
  () => import('./Map').then((mod) => mod.Map),
  { 
    ssr: false,
    loading: () => (
      <Card className="overflow-hidden">
        <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Loading map...</div>
        </div>
      </Card>
    )
  }
);

export function GoogleMap() {
  return <Map />;
}