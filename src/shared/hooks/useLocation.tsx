import { useContext } from 'react';
import { GeoLocationContext, GeoLocationContextType } from '@/app/context/context';

export default function useLocation(): GeoLocationContextType {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a GeoLocationProvider');
  }
  return context;
}
