import Image, { StaticImageData } from 'next/image';
import React from 'react';
type CategoryListProps = {
  imgSrc?: StaticImageData | string;
  alt: string;
};

export default function CategoryList({ imgSrc, alt }: CategoryListProps) {
  return (
    <>
      <div>
        <Image src={imgSrc as string} alt={alt} />
      </div>
    </>
  );
}
