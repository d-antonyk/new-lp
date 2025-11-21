'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Factoring from '@/assets/images/brands/factoring.webp';
import Eauclaire from '@/assets/images/brands/eaucaire.webp';
import Rent from '@/assets/images/brands/rent.webp';
import Rushin from '@/assets/images/brands/rushin.webp';
import Lawellness from '@/assets/images/brands/lawellness.webp';
import Ppt from '@/assets/images/brands/ppt.webp';
import Pure from '@/assets/images/brands/pure.webp';
import Rock from '@/assets/images/brands/rock.webp';
import Emulate from '@/assets/images/brands/emulate.webp';

type ImgLike = string | StaticImageData;

const logos: ImgLike[] = [
  Factoring, Eauclaire, Rent, Rushin, Lawellness, Ppt, Emulate, Pure, Rock,
];

export const Brands = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const firstSetWidth = track.scrollWidth / 2;
      const speed = 100;
      setAnimationDuration(firstSetWidth / speed);
    };

    update();

    const img = track.querySelector('img');
    if (img && !img.complete) {
      img.addEventListener('load', update, { once: true });
      return () => img.removeEventListener('load', update);
    }
  }, []);

  return (
    <div className="brands__wrapper">
      <h3 className="brands-title">Our Clients</h3>
      <div className="brands-slider">
        <div
          className="brands-track"
          ref={trackRef}
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {[...logos, ...logos].map((logo, index) => {
            const src = typeof logo === 'string' ? logo : logo.src;
            const w   = typeof logo === 'string' ? undefined : logo.width;
            const h   = typeof logo === 'string' ? undefined : logo.height;

            return (
              <div className="brands-item" key={index}>
                <img
                  src={src}
                  alt={`logo-${index}`}
                  width={w}
                  height={h}
                  loading={"eager"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="brands-mobile">
        <div className="brands-list">
            {[...logos].map((logo, index) => (
                <div className="brands-logo" key={index}>
                    <Image src={logo} alt={`logo-${index}`} className={`brands-logo-${index}`} />
                </div>
            ))}
            </div>
            <div className="brands-text">
                and more
            </div>
      </div>
    </div>
  );
};
