import React from 'react';
import useLocation from '@/shared/hooks/useLocation';

interface LocationFromPropsProps {
  location: string;
}

export const LocationArea: React.FC = () => {
  const { location } = useLocation();
  return <LocationFromProps location={location} />;
};

// eslint-disable-next-line react/display-name
export const LocationFromProps = React.memo(
  ({ location }: LocationFromPropsProps) => (
    <span data-location={location}>{location}</span>
  )
);
