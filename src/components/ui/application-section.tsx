import Image, { StaticImageData } from 'next/image';
import React from 'react';
type ApplicationSection = {
  title: string;
  imgSrc: StaticImageData;
  description: string;
};
export default function ApplicationSection({
  title,
  imgSrc,
  description,
}: ApplicationSection) {
  return (
    <div>
      <div>
        <div className="my-4">
          <div className="flex gap-4 items-start">
            <Image src={imgSrc} alt="" className="object-cover" />

            <div>
              <h1 className=" mb-3 font-bold text-3xl">{title}</h1>
              <div className="leading-7 font-semibold">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
