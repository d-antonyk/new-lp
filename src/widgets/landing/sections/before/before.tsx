import React from 'react';
import Image from 'next/image';

import BeforeImg from '@/assets/images/before/before.webp';
import BeforeMobileImg from '@/assets/images/before/before-mobile.webp';

export const Before = () => {
    return (
        <section className="before__wrapper">
            <h2 className="title">
                <span>  
                    Fewer calls. Fewer roof jobs.
                </span>
                <span>
                    Competitors showing up on Google — <span className="colored">not you</span>
                </span>
            </h2>
            <div className="before container">
                <div className="before-info">
                    <div className="before-item">
                        <div className="before-title">
                            We hear this every day
                        </div>
                        <div className="before-list">
                            <div className="before-list-item">
                                Homeowners can’t find you for roof repairs or on Maps
                            </div>
                            <div className="before-list-item">
                                Storm chasers swooped in after storm season
                            </div>
                            <div className="before-list-item">
                                You’ve wasted money on ads that didn’t bring roof inspections
                            </div>
                            <div className="before-list-item">
                                People don’t know who to trust for roofing in your area
                            </div>
                            <div className="before-list-item">
                                You’re juggling crews and insurance work with no time for marketing
                            </div>
                        </div>
                    </div>

                    <div className="before-image">
                        <Image src={BeforeImg} width={326} height={365} alt='topposition' className='before-image-desktop' />
                        <Image src={BeforeMobileImg} width={253} height={236} alt='topposition' className='before-image-mobile' />
                    </div>

                    <div className="before-item">
                        <div className="before-title">
                            Imagine This Instead
                        </div>
                        <div className="before-list">
                            <div className="before-list-item">
                                You show up first when people search for roof replacements or repairs
                            </div>
                            <div className="before-list-item">
                                Your phone rings with storm, leak, and replacement requests
                            </div>
                            <div className="before-list-item">
                                Homeowners see proof you’re the trusted local roofer
                            </div>
                            <div className="before-list-item">
                                You can track ROI and know which roofs came from which ads
                            </div>
                            <div className="before-list-item">
                                You focus on installs and claims—we handle the marketing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};







