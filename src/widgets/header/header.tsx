import Image from 'next/image';
import Logo from '@/assets/images/logo/logo-header.webp';
import { ButtonHeader } from '@/widgets/buttons/button-header';

interface HeaderProps {
  phoneNumber: string;
  phoneNumberLink: string;
}

export const Header: React.FC<HeaderProps> = ({ phoneNumber, phoneNumberLink }) => {
  return (
    <div className="header__wrapper">
      <div className="header container">
        <a className="header__logo" href="/">
          <Image src={Logo} width={155} height={32} alt="logo" />
        </a>
        <hr />
        <ButtonHeader
          title="Request a call back"
          phoneNumber={phoneNumber}
          phoneNumberLink={phoneNumberLink}
        />
      </div>
    </div>
  );
};
