import Image, { StaticImageData } from 'next/image';
import React from 'react';
type FlourProductImgProps = {
  imgSrc: StaticImageData;
  alt: string;
  productName: string;
};

export default function FlourProductImg({
  imgSrc,
  alt,
  productName,
}: FlourProductImgProps) {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center  ">
          <Image src={imgSrc} alt={alt} className="object-cover" />
          <h1 className="text-[#D80000]   text-[26px] font-bold my-6">
            {productName}
          </h1>
        </div>
      </div>
    </>
  );
}
