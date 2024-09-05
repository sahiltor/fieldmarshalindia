'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import {
  logoSlide1,
  logoSlide2,
  logoSlide3,
  logoSlide4,
  logoSlide5,
  logoSlide6,
  logoSlide7,
  logoSlide8,
} from '@/lib/images';
import { cn } from '@/lib/utils';
type LogoSliderProps = {
  className?: string;
};
export default function LogoSlider({ className }: LogoSliderProps) {
  return (
    <>
      <div>
        <div className={(cn('border-[#D80000]'), className)}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            className=""
          >
            <SwiperSlide>
              <div>
                <Image src={logoSlide1} alt="home" className="object-cover  " />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide2} alt="home" className="object-cover " />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide3} alt="home" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide4} alt="home" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide5} alt="home" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide6} alt="home" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide7} alt="home" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logoSlide8} alt="home" className="object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
