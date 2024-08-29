'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CategoryList from '@/components/ui/category-list';
import FlourProductImg from '@/components/ui/flour-product-img';
import FlourTitleTop from '@/components/ui/flour-title-top';
import { aaharCategoryIcon, aaharProductsImg } from '@/lib/data';
import { aaharLogo } from '@/lib/images';

export default function AaharProduct() {
  return (
    <>
      <div>
        <div>
          <FlourTitleTop
            imgSrc={aaharLogo}
            alt="Ira Logo"
            description="Aahar is designed by maintaining excellence in quality with trending modern lifestyle and attractive designs. The single piece chamber is fitted with Food grade Diamond Edge Cutter, Stainless Steel Bitter, Hopper and Container with capacity of 5Kgs. The Top Platform and inner side walls are protected with steel for easy cleaning. An Auto Glow LED and for Easy pullout of Flour Container Slider system is available in it."
          />
        </div>
        {/* product */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center  my-7">
          {aaharProductsImg.map((aahar, index) => (
            <FlourProductImg key={index} {...aahar} />
          ))}
        </div>
        {/* catergory */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={0}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          className=""
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
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {aaharCategoryIcon.map((iraIcon, index) => (
            <SwiperSlide key={index}>
              <CategoryList {...iraIcon} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
