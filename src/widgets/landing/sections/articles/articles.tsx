import React from 'react';
import Image from 'next/image';

import Image1Desktop from '@/assets/images/articles/articles-1-desktop.webp';
import Image1Tablet from '@/assets/images/articles/articles-1-tablet.webp';
import Image1Mobile from '@/assets/images/articles/articles-1-mobile.webp';
import Image2Desktop from '@/assets/images/articles/articles-2-desktop.webp';
import Image2Tablet from '@/assets/images/articles/articles-2-tablet.webp';
import Image2Mobile from '@/assets/images/articles/articles-2-mobile.webp';

export const Articles = () => {
    return (
        <section className="articles__wrapper">
            <div className="articles container">
                <div className="articles__item">
                    <div className="articles-info">
                        <h2 className="title">
                            We stand <br /> behind our service
                        </h2>
                        <div className="articles-subtitle">
                            We won’t promise the moon. We will show <br /> 
                            you exactly what’s working
                        </div>
                        <div className="articles-mobile">
                            <Image src={Image1Mobile} width={355} height={243} alt='article-2' />
                        </div>
                        <div className="articles-list">
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    Results or You Don’t Pay
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    Ask about our performance-based plans
                                </span>
                            </div>
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    100% Transparent Reports
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    You’ll see where every dollar goes
                                </span>
                            </div>
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    Month-to-Month Flexibility
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    No long-term contracts
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="articles-image">
                        <Image src={Image1Desktop} width={559} height={354} alt='article-1' className='articles-image-desktop' />
                        <Image src={Image1Tablet} width={397} height={355} alt='article-1' className='articles-image-tablet' />
                    </div>
                </div>

                <div className="articles__item reverse">
                    <div className="articles-image">
                        <Image src={Image2Desktop} width={559} height={352} alt='article-2' className='articles-image-desktop' />
                        <Image src={Image2Tablet} width={397} height={352} alt='article-2' className='articles-image-tablet' />
                    </div>
                    <div className="articles-info">
                        <h2 className="title">
                            Here’s What <br /> Happens Next
                        </h2>
                        <div className="articles-mobile">
                            <Image src={Image2Mobile} width={355} height={243} alt='article-2' />
                        </div>
                        <div className="articles-list">
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    Book a Call
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    We discuss your goals and issues
                                </span>
                            </div>
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    Get a Custom Plan
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    Local SEO, Ads, Review Boosting—      
                                    tailored for your business
                                </span>
                            </div>
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    We Launch Fast
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    Campaigns live within a few days
                                </span>
                            </div>
                            <div className="articles-item">
                                <span className="articles-text-strong">
                                    You See Results
                                </span>
                                <span className="articles-dash">-</span>
                                <span className="articles-text">
                                    Calls, leads, and a growing customer base
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};