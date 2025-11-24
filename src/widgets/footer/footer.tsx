import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo/logo-footer.webp';
import PhoneWhite from '@/assets/images/icons/phone-white.svg';
import LinkedIn from '@/assets/images/icons/ldin.svg';
import Fb from '@/assets/images/icons/fb.svg';
import Insta from '@/assets/images/icons/insta.svg';

import { ButtonForm } from '@/widgets/buttons/button-form';

interface FooterProps {
  phoneNumber: string;
  phoneNumberLink: string;
}

export const Footer: React.FC<FooterProps> = ({ phoneNumber, phoneNumberLink }) => {
  return (
    <footer className="footer__wrapper">
      <div className="footer container">
        <div className="footer-box">
          <div className="footer-info">
            <a href="/" className="footer-logo">
              <Image src={Logo} width={172} height={36} alt='logo' />
            </a>
            <div className="footer-text">
              Our team knows roofing businesses. Whether you’re a small crew or a growing contractor, we find smart ways to lower acquisition costs and grow profit using the latest digital tools and a hands-on team.
            </div>
          </div>
          <ButtonForm title='Book Your Free Strategy Call' />
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts-text">
            Contact
          </div>
          <a data-hj-allow href={phoneNumberLink} className="footer-phone">
            <PhoneWhite className='footer-phone-ico' />
            <div className="footer-phone-text">
              {phoneNumber}
            </div>
          </a>
          <div className="footer-media">
            <a href="https://www.linkedin.com/company/top1-position/" className="footer-media-ico" target='_blank'>
              <LinkedIn />
            </a>
            <a href="https://www.facebook.com/ursastar" className="footer-media-ico" target='_blank'>
              <Fb />
            </a>
            <a href="https://www.instagram.com/topposition_com/" className="footer-media-ico" target='_blank'>
              <Insta />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            Copyright © {new Date().getFullYear()}. Topposition. <br /> All rights reserved.
          </div>
          <div className="footer-links">
            <a href="https://topposition.com/terms-and-conditions/" className="footer-links-text" target='blank'>
              Terms & Conditions
            </a>
            <a href="https://topposition.com/privacy-policy/" className="footer-links-text" target='blank'>
              Privacy Policy
            </a>
          </div>
        </div>  
      </div>
    </footer>
  );
};
