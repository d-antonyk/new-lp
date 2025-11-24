import React from 'react';
import Image from 'next/image';
import { ButtonForm } from '@/widgets/buttons/button-form';

import BannerImg from '@/assets/images/banner/banner-desktop.webp'; 
import BannerTabletImg from '@/assets/images/banner/banner-tablet.webp'; 
import BannerMobileImg from '@/assets/images/banner/banner-mobile.webp';
import GooglePartner from '@/assets/images/banner/google-partner.webp';
import MicrosoftPartner from '@/assets/images/banner/microsoft-partner.webp';
import Clients from '@/assets/images/banner/banner-reviews.webp';

export const Banner = () => {
    return (
        <section className="banner__wrapper">
            <div className="banner container">
                <div className="banner-info">
                    <h1 className="banner-title">
                        <span>Your Local <br /> Roofing Business <br /> Deserves More Calls.</span>
                        <span>Let's Make It Happen.</span>
                    </h1>
                    <span className="banner-subtitle">
                        No fluff. Just leads, results, and your phone ringing again.
                    </span>
                    <p className="banner-text">
                        We help roofing contractors fix their biggest issue—
                        getting found and getting hired.
                    </p>
                    <div className="banner-button">
                        <ButtonForm title='Book Your Free Strategy Call' />
                        
                        <div className="banner-partners">
                            <Image src={GooglePartner} width={95} height={91} alt='google-partner' />
                            <Image src={MicrosoftPartner} width={243} height={91} alt='microsoft-partner' />
                        </div>
                    </div>
                    <div className="banner-reviews">
                        <Image src={Clients} width={176} height={56} alt='reviews'/>
                        <div className="banner-reviews-col">
                            <div className="banner-reviews-colored">
                                +135  Roofing Contractors  
                            </div>
                            <div className="banner-reviews-text">
                                Already Trust Us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-image">
                <Image src={BannerImg} width={667} height={462} alt='roofing' className='banner-img-desktop' />
                <Image src={BannerTabletImg} width={433} height={394} alt='roofing' className='banner-img-tablet' />
                <Image src={BannerMobileImg} width={355} height={324} alt='roofing' className='banner-img-mobile' />
            </div>
            </div>
        </section>
    );
};
