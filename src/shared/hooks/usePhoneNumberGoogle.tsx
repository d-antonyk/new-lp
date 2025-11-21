import { useState } from 'react';

interface PhoneNumberGoogleData {
  phoneNumberGoogle: string;
  phoneNumberLinkGoogle: string;
}

export default function usePhoneNumberGoogle(): PhoneNumberGoogleData {
  const [phoneNumberGoogle] = useState<string>(process.env.GATSBY_GOOGLE_PHONE_NUMBER || '');

  const rawNumber = phoneNumberGoogle.replace(/\D/g, '');

  const formattedNumber =
    rawNumber.length === 10
      ? `(${rawNumber.slice(0, 3)}) ${rawNumber.slice(3, 6)}-${rawNumber.slice(6)}`
      : rawNumber;

  return {
    phoneNumberGoogle: formattedNumber,
    phoneNumberLinkGoogle: rawNumber ? `tel:${rawNumber}` : '',
  };
}
