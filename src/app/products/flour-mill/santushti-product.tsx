'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CategoryList from '@/components/ui/category-list';
import FlourProductImg from '@/components/ui/flour-product-img';
import FlourTitleTop from '@/components/ui/flour-title-top';
import { santushtiProductsImg, shaktiCategoryIcon } from '@/lib/data';
import { santushtiLogo } from '@/lib/images';

export default function SantushtiProduct() {
  return (
    <>
      <div>
        <div>
          <FlourTitleTop
            imgSrc={santushtiLogo}
            alt="Santushti  Logo"
            description="As the name Santushti indicates, it is complete fulfillment of the family by grinding capacity of 6.5 Kgs. It’s Euro Edge Cutter, Hopper, Container and Bitter are made of Highly precise food grade Stainless Steel material. It has unique, Gracefully designed mirror finished Front & Top door. A Special Air Cooled Filter and suitable S.S. Seives (Jaali) set is provided for better cooling, fineness of desired Flour, Masala and Cereals etc.

"
          />
        </div>
        {/* product */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center  my-7">
          {santushtiProductsImg.map((santushti, index) => (
            <FlourProductImg key={index} {...santushti} />
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
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            {shaktiCategoryIcon.map((iras, index) => (
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
