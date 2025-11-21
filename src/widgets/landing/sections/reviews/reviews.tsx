import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { InfoTooltip } from '../tooltip/tootip';

import AdsIco from '@/assets/images/icons/ads.svg';
import BingIco from '@/assets/images/icons/bing.webp';
import StrokeOrange from '@/assets/images/icons/stroke-orange.svg';
import StrokeBlue from '@/assets/images/icons/stroke-blue.svg';
import TopIco from '@/assets/images/icons/topposition-icon.svg';
import RateIco from '@/assets/images/icons/rate.webp';

import BannerRoku from '@/assets/images/reviews/banner-roku.webp';
import BannerCgr from '@/assets/images/reviews/banner-cgr.webp';
import BannerBixi from '@/assets/images/reviews/banner-bixi.webp';
import ClientRoku from '@/assets/images/reviews/client-roku.webp';
import ClientCgr from '@/assets/images/reviews/client-cgr.webp';
import ClientBixi from '@/assets/images/reviews/client-bixi.webp';

import ArrowPrev from '@/assets/images/icons/arrow-prev.webp';
import ArrowNext from '@/assets/images/icons/arrow-next.webp';

interface CustomDotsProps {
  children: React.ReactNode;
}

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slider-arrow prev" onClick={onClick}>
      <Image src={ArrowPrev} width={56} height={56} alt='prev' />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="slider-arrow next" onClick={onClick}>
      <Image src={ArrowNext} width={56} height={56} alt='next' />
    </button>
  );
};

const CustomDots = ({ children }: CustomDotsProps) => (
  <ul className="slider-dots">{children}</ul>
);

export const Reviews = () => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="reviews-controls">
        <button onClick={() => sliderRef.current?.slickPrev()} className="slider-arrow">
          <Image src={ArrowPrev} alt="prev" width={56} height={56} />
        </button>
        <CustomDots>{dots}</CustomDots>
        <button onClick={() => sliderRef.current?.slickNext()} className="slider-arrow">
          <Image src={ArrowNext} alt="next" width={56} height={56} />
        </button>
      </div>
    ),
    customPaging: () => <button type="button" />,
  };
    return (
        <section className="reviews__wrapper">
            <h2 className="title">
                See Our Successful Digital Marketing Clients
            </h2>
            <div className="reviews container">
                <div className="reviews-slider">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="reviews-slide">
                        <div className="reviews-icon">
                            <TopIco />
                        </div>
                        <div className="reviews-mobile">
                            <div className="reviews-mobile-info">
                                <div className="reviews-title">
                                    Roku Air And Heating
                                </div>
                                <div className="reviews-date">
                                    PPC marketing results <br /> (01.01.2024-01.01.2025)
                                </div>
                            </div>
                            <div className="reviews-icon">
                                <TopIco />
                            </div>
                        </div>
                        <div className="reviews-left">
                            <div className="reviews-image">
                                <Image src={BannerRoku} width={466} height={287} alt='roku' />
                            </div>
                            <div className="reviews-client">
                                <div className="reviews-header">
                                    <div className="reviews-client-img">
                                        <Image src={ClientRoku} width={70} height={70} alt='roku' />
                                    </div>
                                    <div className="reviews-header-info">
                                        <div className="reviews-client-name">
                                            J. Miller
                                        </div>
                                        <div className="reviews-client-rate">
                                            <Image src={RateIco} width={126} height={23} alt='rate' />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-client-text">
                                    “They tracked every lead. I knew what I was getting—and I got my money’s worth.”
                                </div>
                            </div>
                        </div>
                        <div className="reviews__info">
                            <div className="reviews-title">
                                Roku Air And Heating
                            </div>
                            <div className="reviews-date">
                                PPC marketing results (01.01.2024-01.01.2025)
                            </div>
                            <div className="reviews-stat">
                                <div className="reviews-item">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <AdsIco />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Google Ads Spent
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    $229,264.06
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeOrange />
                                                 </div>
                                            </div>     
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Leads
                                            </div>
                                            <div className="reviews-item-stat">
                                                1058
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Jobs
                                            </div>
                                            <div className="reviews-item-stat">
                                                374
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Cost per Lead
                                            </div>
                                            <div className="reviews-item-stat">
                                                $216
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                ROAS
                                            </div>
                                            <div className="reviews-item-stat">
                                                143%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="reviews-item">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <Image src={BingIco} width={54} height={65} alt='bing' />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Bing Ads Spent
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    $69,603.50
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeBlue />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Leads
                                            </div>
                                            <div className="reviews-item-stat">
                                                456
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Jobs
                                            </div>
                                            <div className="reviews-item-stat">
                                                167
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                Cost per Lead
                                            </div>
                                            <div className="reviews-item-stat">
                                                $152.6
                                            </div>
                                        </div>
                                        <div className="reviews-item-info">
                                            <div className="reviews-item-elem">
                                                ROAS
                                            </div>
                                            <div className="reviews-item-stat">
                                                275%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-slide">
                        <div className="reviews-icon">
                            <TopIco />
                        </div>
                        <div className="reviews-mobile">
                            <div className="reviews-mobile-info">
                                <div className="reviews-title">
                                    California Garage Repair (CGR)
                                </div>
                                <div className="reviews-date">
                                    PPC marketing results <br /> (01.01.2024-31.07.2024)
                                </div>
                            </div>
                            <div className="reviews-icon">
                                <TopIco />
                            </div>
                        </div>
                        <div className="reviews-left">
                            <div className="reviews-image">
                                <Image src={BannerCgr} width={466} height={287} alt='cgr' />
                            </div>
                            <div className="reviews-client cgr">
                                <div className="reviews-header">
                                    <div className="reviews-client-img">
                                        <Image src={ClientCgr} width={70} height={70} alt='cgr' />
                                    </div>
                                    <div className="reviews-header-info">
                                        <div className="reviews-client-name">
                                            C. Williams
                                        </div>
                                        <div className="reviews-client-rate">
                                            <Image src={RateIco} width={126} height={23} alt='rate' />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-client-text">
                                    “I didn’t believe in digital marketing until TopPosition brought us results I could 
                                    see and measure.”
                                </div>
                            </div>
                        </div>
                        <div className="reviews__info">
                            <div className="reviews-title">
                                California Garage Repair (CGR)
                            </div>
                            <div className="reviews-date">
                                PPC marketing results (01.01.2024-31.07.2024)
                            </div>
                            <div className="reviews-stat">
                                <div className="reviews-item">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <AdsIco />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Total profit
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    $488,422.39
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeOrange />
                                                 </div>
                                            </div>     
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem">
                                                Qualified leads
                                            </div>
                                            <div className="reviews-item-stat">
                                                7387
                                            </div>
                                        </div>
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem">
                                                CPL
                                            </div>
                                            <div className="reviews-item-stat">
                                                $155.7
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="reviews-item">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <Image src={BingIco} width={54} height={65} alt='bing' />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Total profit
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    $245,398.90
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeBlue />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem">
                                                Qualified leads
                                            </div>
                                            <div className="reviews-item-stat">
                                                993
                                            </div>
                                        </div>
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem">
                                                CPL
                                            </div>
                                            <div className="reviews-item-stat">
                                                 $89.7
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-slide">
                        <div className="reviews-icon">
                            <TopIco />
                        </div>
                        <div className="reviews-mobile">
                            <div className="reviews-mobile-info">
                                <div className="reviews-title">
                                    Bixi Appliance Repair
                                </div>
                                <div className="reviews-date">
                                    PPC marketing results <br /> (01.01.2024-31.07.2024)
                                </div>
                            </div>
                            <div className="reviews-icon">
                                <TopIco />
                            </div>
                        </div>
                        <div className="reviews-left">
                            <div className="reviews-image">
                                <Image src={BannerBixi} width={466} height={287} alt='bixi' />
                            </div>
                            <div className="reviews-client cgr">
                                <div className="reviews-header">
                                    <div className="reviews-client-img">
                                        <Image src={ClientBixi} width={70} height={70} alt='bixi' />
                                    </div>
                                    <div className="reviews-header-info">
                                        <div className="reviews-client-name">
                                            J. Tyler
                                        </div>
                                        <div className="reviews-client-rate">
                                            <Image src={RateIco} width={126} height={23} alt='rate' />
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-client-text">
                                    “We went from zero calls to fully booked within 6 weeks. Best decision we made.”
                                </div>
                            </div>
                        </div>
                        <div className="reviews__info">
                            <div className="reviews-title">
                                Bixi Appliance Repair
                            </div>
                            <div className="reviews-date">
                                PPC marketing results (01.01.2024-31.07.2024)
                            </div>
                            <div className="reviews-stat">
                                <div className="reviews-item bixi">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <AdsIco />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Closed deals
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    575
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeOrange />
                                                 </div>
                                            </div>     
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-inline">
                                                <div className="reviews-item-elem bixi">
                                                    CAC
                                                </div>
                                                <div className="reviews-ico-info">
                                                    <InfoTooltip />
                                                </div>
                                            </div>
                                    
                                            <div className="reviews-item-stat">
                                                $134.3
                                            </div>
                                        </div>
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem bixi">
                                                CPL
                                            </div>
                                            <div className="reviews-item-stat">
                                                $106.25
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="reviews-item bixi">
                                    <div className="reviews-item-head">
                                        <div className="reviews-item-logo">
                                            <Image src={BingIco} width={54} height={65} alt='bing' />
                                        </div>
                                        <div className="reviews-item-col">
                                            <div className="reviews-item-name">
                                                Closed deals
                                            </div>
                                            <div className="reviews-item-graph">
                                                <div className="reviews-item-sum">
                                                    158
                                                </div>
                                                <div className="reviews-item-stroke">
                                                    <StrokeBlue />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-result">
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-inline">
                                                <div className="reviews-item-elem bixi">
                                                    CAC
                                                </div>
                                                <div className="reviews-ico-info">
                                                    <InfoTooltip />
                                                </div>
                                            </div>
                                            <div className="reviews-item-stat">
                                                $144.4
                                            </div>
                                        </div>
                                        <div className="reviews-item-info fit-content">
                                            <div className="reviews-item-elem bixi">
                                                CPL
                                            </div>
                                            <div className="reviews-item-stat">
                                                 $111.3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};