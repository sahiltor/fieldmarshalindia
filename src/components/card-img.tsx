import Image, { StaticImageData } from 'next/image';
import React from 'react';
type CardImgProps = {
  imgSrc?: StaticImageData | string;
};

export default function CardImg({ imgSrc }: CardImgProps) {
  return (
    <>
      <div className="cardShadow">
        <Image
          src={imgSrc as string}
          alt=""
          className="object-cover rounded-2xl"
        />
      </div>
    </>
  );
}
