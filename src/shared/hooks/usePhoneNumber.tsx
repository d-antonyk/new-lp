import { useState } from 'react';

interface PhoneNumberData {
  phoneNumber: string;      
  phoneNumberLink: string; 
}

export default function usePhoneNumber(): PhoneNumberData {
  const [phoneNumber] = useState<string>(process.env.PHONE_NUMBER || '');

  const cleanNumber = phoneNumber.replace(/[^+\d]/g, '');
  const digits = phoneNumber.replace(/\D/g, '');
  const changeNumber = digits.replace(
    /^(\d{3})(\d{3})(\d{4})$/,
    (_, p1, p2, p3) => `(${p1}) ${p2} ${p3}`
  );

  return {
    phoneNumber: changeNumber,
    phoneNumberLink: `tel:+1${cleanNumber}`,
  };
}
