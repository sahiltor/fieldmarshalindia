import React from 'react';
import Description from './description';
import CardImg from './card-img';
import { aboutImg } from '@/lib/data';
import { image01, image02, image03, image04 } from '@/lib/images';
import { Button } from './ui/button';
import LeftTitle from './ui/left-title';

export default function AboutExplain() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center  justify-between gap-8">
        <div className="w-1/2 flex ">
          <Description>
            <LeftTitle title="About Us" />
            <div className="flex gap-4 flex-col my-4 text-base">
              <p>
                The Thukral Group of Companies FIELDMARSHAL Punjab was
                established in 1973 in a small Historic town of India, Sirhind
                (Punjab) by Late Sh. Ganga Ram Thukral with the active
                assistance of his son Sh. Sushil Thukral.
              </p>
              <p>
                The journey of FIELDMARSHAL first began with the establishment
                of the manufacturing unit of Agriculture Belt Driven and Direct
                Coupled Centrifugal Water Pumps and its parts in 1973.
                Thereafter, in 1980, the Company also started manufacturing
                Flour Mills and its parts.
              </p>
              <p>
                In 1985, the Company entered into global market with its
                international standard product range under the trademark
                FIELDMARSHAL. In 1989, the company received its first
                Recognition by the Govt. of India by way of IS:6595
                Certification. In 1997, the company entered into the field of
                Electricals and the manufacturing unit for Domestic Submersible
                Water Pumpsets was setup. Thereafter, in 2002 the company
                started manufacturing Agriculture Submersible Water Pumpsets.
              </p>
            </div>
            <div>
              <Button
                variant="outline"
                className="text-white text-lg bg-[#D80000] px-9 py-6 hover:bg-[#D80000] hover:text-white"
              >
                Read More...
              </Button>
            </div>
          </Description>
        </div>
        <div className="">
          <div className="columns-1 sm:columns-2  gap-4">
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image01} />
            </div>
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image02} />
            </div>
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image03} />
            </div>
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image04} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
