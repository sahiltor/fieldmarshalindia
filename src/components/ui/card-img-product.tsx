import Image, { StaticImageData } from 'next/image';
import React from 'react';
import LinkButton from './link-button';
type CardImgProductProps = {
  imgSrc?: StaticImageData | string;
  href: string;
};

export default function CardImgProduct({ imgSrc, href }: CardImgProductProps) {
  return (
    <>
      <div className="relative h-fit group overflow-hidden">
        <Image
          src={imgSrc as string}
          alt=""
          className="object-cover w-full rounded-2xl "
        />
        <div className="absolute rounded-2xl h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* <button className="bg-black text-white py-2 px-5"></button> */}
          <LinkButton href={href}>View More</LinkButton>
        </div>
      </div>
    </>
  );
}
