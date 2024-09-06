'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { iraIcon1, iraIcon2, iraIcon3, iraIcon4, iraIcon5 } from '@/lib/images';

import FlourProductImg from '@/components/ui/flour-product-img';
import FlourTitleTop from '@/components/ui/flour-title-top';
import { iraCategoryIcon, iraProducts } from '@/lib/data';
import { iraLogo } from '@/lib/images';
import CategoryList from '@/components/ui/category-list';

export default function IraProduct() {
  return (
    <>
      <div>
        <div>
          <FlourTitleTop
            imgSrc={iraLogo}
            alt="Ira Logo"
            description="IRA  is especially designed by keeping an idea of “Modern Modular design” made by High Quality MDF, Food grade single piece chamber, Stainless Steel Bitter and hopper with capacity of 5 Kgs. Seives (Jali) are made of highly précised S.S for desired fineness of grains, cereals etc. For easy and simple collection of flour there is provision of direct cloth from chamber to container and also a ‘Child Safety Locking system’ has been provided to avoid any kind of accident."
          />
        </div>
        {/* product */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center  my-7">
          {iraProducts.map((iras, index) => (
            <FlourProductImg key={index} {...iras} />
          ))}
        </div>
        {/* catergory */}
      </div>
      <div>
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay
            spaceBetween={0}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              520: {
                slidesPerView: 3,
              },
              580: {
                slidesPerView: 4,
              },

              1000: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {iraCategoryIcon.map((iras, index) => (
              <SwiperSlide key={index}>
                <CategoryList {...iras} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
