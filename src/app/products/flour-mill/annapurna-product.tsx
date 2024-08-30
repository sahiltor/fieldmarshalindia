import CategoryList from '@/components/ui/category-list';
import FlourProductImg from '@/components/ui/flour-product-img';
import FlourTitleTop from '@/components/ui/flour-title-top';
import {
  annapurnaIcon1,
  annapurnaIcon2,
  annapurnaIcon3,
  annapurnaIcon4,
  annapurnaLogo,
  annapurnaProductWave,
} from '@/lib/images';
import React from 'react';

export default function AnnapurnaProduct() {
  return (
    <>
      <FlourTitleTop imgSrc={annapurnaLogo} alt="Annapurna  Logo" />
      <div className="flex gap-10 items-center justify-center">
        <div className="basis-1/5">
          <FlourProductImg
            imgSrc={annapurnaProductWave}
            alt=""
            productName="Wave"
          />
        </div>
        <div className="basis-5/12">
          <div className="border-y-[1px] border-black py-10 flex flex-col leading-8	 gap-8 text-[#333333] ">
            <p>
              The Flour Mill Annapurna is designed by keeping in view the basic
              requirement of the medium and large sized families with 2 in 1
              Chamber
            </p>
            <p>
              SS Heavy Bitter and Mirror Finished Front as well as Top Door. Its
              unique design makes it different from others due to large capacity
              and productivity in same frame of time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 basis-1/4">
          <CategoryList imgSrc={annapurnaIcon1} alt="annapurnaIcon1" />
          <CategoryList imgSrc={annapurnaIcon2} alt="annapurnaIcon2" />
          <CategoryList imgSrc={annapurnaIcon3} alt="annapurnaIcon3" />
          <CategoryList imgSrc={annapurnaIcon4} alt="annapurnaIcon4" />
        </div>
      </div>
    </>
  );
}
