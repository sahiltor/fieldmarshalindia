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
          <div className=" flex flex-col  sm:flex-row gap-4 items-center">
            <Image src={imgSrc} alt="" className="object-cover" />

            <div className="">
              <h1 className="sm:text-left text-center mb-3 font-bold text-3xl">
                {title}
              </h1>

              <div className="sm:text-left text-center leading-7 font-semibold">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
