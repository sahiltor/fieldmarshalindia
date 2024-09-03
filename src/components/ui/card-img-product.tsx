import Image, { StaticImageData } from 'next/image';
import React from 'react';
import LinkButton from './link-button';
type CardImgProductProps = {
  imgSrc?: StaticImageData | string;
  href: string;
  title: string;
};

export default function CardImgProduct({
  imgSrc,
  href,
  title,
}: CardImgProductProps) {
  return (
    <>
      <div className="relative rounded-2xl shadow-lg border h-fit group overflow-hidden">
        <div>
          <Image
            src={imgSrc as string}
            alt=""
            className="object-cover w-full  "
          />
          <div className="bg-gray-300 py-2 px-4">
            <h1 className="text-lg text-center ">{title}</h1>
          </div>
        </div>
        <div className="absolute rounded-2xl h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <LinkButton href={href}>View More</LinkButton>
        </div>
      </div>
    </>
  );
}
