import React from 'react';
import {Header} from '@/widgets/header/header';
import {Footer} from '@/widgets/footer/footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  phoneNumber: string;
  phoneNumberLink: string;
}

export const DefaultLayout : React.FC<DefaultLayoutProps> = ({ children, phoneNumber, phoneNumberLink }) => {
  return (
    <div className="main">
      <Header phoneNumber={phoneNumber} phoneNumberLink={phoneNumberLink} />
      {children}
      <Footer phoneNumber={phoneNumber} phoneNumberLink={phoneNumberLink} />
    </div>
  );
}