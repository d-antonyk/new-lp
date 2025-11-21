import React from 'react';
import Image from 'next/image';

import WhyImg from '@/assets/images/why/why-desktop.webp';
import WhyTabletImg from '@/assets/images/why/why-tablet.webp';
import WhyMobileImg from '@/assets/images/why/why-mobile.webp';

import Check from '@/assets/images/icons/check.svg';

export const Why = () => {
    return (
        <section className="why__wrapper">
            <h3 className="title">Why Local Businesses<br /> 
                Choose Us</h3>
            <div className="why container">
                <div className="why-image">
                    <Image src={WhyImg} width={735} height={457} alt='why' className='why-image-desktop' />
                    <Image src={WhyTabletImg} width={602} height={457} alt='why' className='why-image-tablet' />
                    <Image src={WhyMobileImg} width={363} height={251} alt='why' className='why-image-mobile' />
                </div>
                <div className="why-info">
                    <h2 className="title">
                        Why Local Businesses <br /> 
                        Choose Us
                    </h2>
                    <div className="why-list">
                        <div className="why-item">
                            <div className="why-ico">
                                <Check />
                            </div>
                            <div className="why-text">
                                5+ experience with local businesses only
                            </div>
                        </div>

                        <div className="why-item">
                            <div className="why-ico">
                                <Check />
                            </div>
                            <div className="why-text">
                                Transparent pricing. <br /> No lock-in contracts.
                            </div>
                        </div>

                        <div className="why-item">
                            <div className="why-ico">
                                <Check />
                            </div>
                            <div className="why-text">
                                Real-time call tracking & ROI reporting
                            </div>
                        </div>

                        <div className="why-item">
                            <div className="why-ico">
                                <Check />
                            </div>
                            <div className="why-text">
                                Fast launch: live in under 7 days
                            </div>
                        </div>

                        <div className="why-item">
                            <div className="why-ico">
                                <Check />
                            </div>
                            <div className="why-text">
                                Human support—no call <br /> centers, no BS
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    );
};