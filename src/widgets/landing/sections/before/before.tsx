import React from 'react';
import Image from 'next/image';

import BeforeImg from '@/assets/images/before/before.webp';
import BeforeMobileImg from '@/assets/images/before/before-mobile.webp';

export const Before = () => {
    return (
        <section className="before__wrapper">
            <h2 className="title">
                <span>  
                    Fewer calls. Fewer jobs.
                </span>
                <span>
                    Competitors showing up on Google — <span className="colored">not me</span>
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
                                You're not showing up on Google or Maps
                            </div>
                            <div className="before-list-item">
                                Word of mouth has dried up
                            </div>
                            <div className="before-list-item">
                                You’ve wasted money on ads that didn’t work
                            </div>
                            <div className="before-list-item">
                                You’re tired of DIY marketing that doesn’t deliver
                            </div>
                            <div className="before-list-item">
                                You're overwhelmed and don’t have time to figure it out
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
                                You show up first when people search for local services
                            </div>
                            <div className="before-list-item">
                                Your phone rings with real, qualified leads
                            </div>
                            <div className="before-list-item">
                                You have a clean online presence that builds trust
                            </div>
                            <div className="before-list-item">
                                You can track ROI with zero guesswork
                            </div>
                            <div className="before-list-item">
                                You focus on what you do best—we handle the rest
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};








