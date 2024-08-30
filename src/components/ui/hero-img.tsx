'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { homeHero, homeHeroSecond, homeHeroThird } from '@/lib/images';

export default function HeroImg() {
  return (
    <>
      <div className="w-full h-full relative">
        {' '}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <Image src={homeHero} alt="home" className="object-cover " />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={homeHeroSecond}
              alt="home"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={homeHeroThird} alt="home" className="object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
