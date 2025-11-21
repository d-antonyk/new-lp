import React, { createContext, useState, ReactNode } from 'react';

export interface GeoLocationContextType {
  location: string;
  updateLocation: (locationValue: string) => void;
  phoneNumber: string;
}

export const GeoLocationContext = createContext<GeoLocationContextType | null>(null);

interface GeoLocationProviderProps {
  children: ReactNode;
}

export const GeoLocationProvider: React.FC<GeoLocationProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<string>('');
  const [phoneNumber] = useState<string>('+123456789');

  const updateLocation = (locationValue: string) => {
    setLocation(locationValue);
  };

  return (
    <GeoLocationContext.Provider value={{ location, updateLocation, phoneNumber }}>
      {children}
    </GeoLocationContext.Provider>
  );
};
