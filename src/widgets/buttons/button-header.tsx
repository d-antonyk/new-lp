'use client';

import { useEffect, useState } from 'react';
/* import { Form } from '~/widgets/landing/sections/form/form';
import { Modal } from '~/widgets/landing/sections/modal/modal'; */

import PhoneOrange from '@/assets/images/icons/phone-orange.svg';

interface ButtonHeaderProps {
  title: string;
  phoneNumber: string;
  phoneNumberLink: string;
}

export const ButtonHeader: React.FC<ButtonHeaderProps> = ({
  title,
  phoneNumber,
  phoneNumberLink,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleModal = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setModalActive(true);
    }
  };

  return (
    <>
      <a
        data-hj-allow
        href={phoneNumberLink}
        className="button-header"
        role="button"
        tabIndex={0}
      >
        <PhoneOrange className="button-ico" />
        <span className="button-title">{phoneNumber}</span>
      </a>
    </>
  );
};
