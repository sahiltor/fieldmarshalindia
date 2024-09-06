import React from 'react';
import Description from './description';
import CardImg from './card-img';
import { image01, image02, image03, image04 } from '@/lib/images';
import LeftTitle from './ui/left-title';
export default function AboutExplain() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  justify-between gap-8">
        <div className="sm:w-1/2 flex  ">
          <Description>
            <LeftTitle title="About Us" />
            <div className="flex gap-4 flex-col my-4 text-base">
              <p>
                Established in 1973 in the historic town of Sirhind, Punjab, The
                Thukral Group of Companies, Field Pumpsol Private Limited, was
                founded by Late Sh. Ganga Ram Thukral, with key support from his
                son, Sh. Sushil Thukral.
              </p>
              <p>
                Field Pumpsol’s journey began with the production of Agriculture
                Belt Driven and Direct Coupled Centrifugal Water Pumps and their
                parts. By 1980, the company expanded into manufacturing Flour
                Mills and their components.
              </p>
              <p>
                In 1985, the company made its mark globally, introducing its
                FIELDMARSHAL-branded products that meet international standards.
                By 1989, it received IS:6595 Certification from the Government
                of India. The company diversified in 1997 by venturing into
                Electricals, establishing a manufacturing unit for Domestic
                Submersible Water Pumpsets. This was followed by the production
                of Agriculture Submersible Water Pumpsets in 2002.
              </p>
            </div>
          </Description>
        </div>
        <div className="">
          <div className="columns-1 sm:columns-2  gap-4">
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image01} />
            </div>
            <div className="mb-4 break-inside-avoid"></div>
            <CardImg imgSrc={image03} />
            <div className="mb-4 break-inside-avoid">
              <CardImg imgSrc={image02} />
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
