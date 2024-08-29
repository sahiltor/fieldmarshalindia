import BgImage from '@/components/bg-image';
import CategoryList from '@/components/ui/category-list';
import FlourProductImg from '@/components/ui/flour-product-img';
import FlourTitleTop from '@/components/ui/flour-title-top';
import StripBg from '@/components/ui/strip-bg';
import { iraCategoryIcon, iraProducts } from '@/lib/data';
import { colorStrigBg, iraLogo } from '@/lib/images';

export default function IraProduct() {
  return (
    <>
      <div>
        <div className="">
          <FlourTitleTop
            imgSrc={iraLogo}
            alt="Ira Logo"
            description="IRA  is especially designed by keeping an idea of “Modern Modular design” made by High Quality MDF, Food grade single piece chamber, Stainless Steel Bitter and hopper with capacity of 5 Kgs. Seives (Jali) are made of highly précised S.S for desired fineness of grains, cereals etc. For easy and simple collection of flour there is provision of direct cloth from chamber to container and also a ‘Child Safety Locking system’ has been provided to avoid any kind of accident."
          />
        </div>
        {/* product */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 items-center justify-center  my-7">
          {iraProducts.map((iras, index) => (
            <FlourProductImg key={index} {...iras} />
          ))}
        </div>
        {/* catergory */}

        <div className="flex  justify-between items-center">
          {iraCategoryIcon.map((iraIcon, index) => (
            <CategoryList key={index} {...iraIcon} alt="" />
          ))}
        </div>
      </div>
    </>
  );
}
