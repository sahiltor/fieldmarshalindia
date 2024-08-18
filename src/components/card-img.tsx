import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Card } from './ui/card';
type CardImgProps = {
  imgSrc: StaticImageData;
};

export default function CardImg({ imgSrc }: CardImgProps) {
  return (
    <>
      <div className="shadow-2xl rounded-2xl">
        <Image
          src={imgSrc}
          alt=""
          className="object-coverh-full w-full rounded-2xl"
        />
      </div>
    </>
  );
}
