import Image, { StaticImageData } from 'next/image';
import React from 'react';
type HeroProductImgProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function HeroProductImg({ imgSrc, alt }: HeroProductImgProps) {
  return (
    <>
      <div>
        <Image src={imgSrc} alt={alt} className="object-cover w-full " />
      </div>
    </>
  );
}
