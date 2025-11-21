'use client';

import { useState } from 'react';
import Image from 'next/image';
import PhoneWhite from '@/assets/images/icons/phone-white.svg';
/* import { Form } from '~/widgets/landing/sections/form/form';
import { Modal } from '~/widgets/landing/sections/modal/modal'; */

interface FixedButtonProps {
  phoneNumber: string;
  phoneNumberLink: string;
}

export const FixedButton: React.FC<FixedButtonProps> = ({
  phoneNumber,
  phoneNumberLink,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalActive(true);
  };

  return (
      <a href='https://calendar.app.google/U1De7CiWuLjDmFbr6' className="fixed-button" role="button">
        <span className="fixed-button__text">Book Your Free Strategy Call</span>
      </a>
  );
};
