import { useState, useEffect } from 'react';
import { MAPS_CONFIG } from '../config/maps';

let isLoading = false;
let isLoaded = false;
let loadPromise: Promise<void> | null = null;

const loadGoogleMapsScript = (): Promise<void> => {
  if (isLoaded) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (isLoading) {
      const checkLoaded = setInterval(() => {
        if (isLoaded) {
          clearInterval(checkLoaded);
          resolve();
        }
      }, 100);
      return;
    }

    isLoading = true;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_CONFIG.apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', () => {
      isLoaded = true;
      isLoading = false;
      resolve();
    });

    script.addEventListener('error', (e) => {
      isLoading = false;
      reject(e);
    });

    document.head.appendChild(script);
  });

  return loadPromise;
};

export const useGoogleMaps = () => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGoogleMapsScript()
      .then(() => setIsReady(true))
      .catch(() => setError('Failed to load Google Maps'));

    return () => {
      // Cleanup if needed
    };
  }, []);

  return { isReady, error };
};