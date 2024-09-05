import React, { Children } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image, { StaticImageData } from 'next/image';

type VisionMissionProps = {
  title: string;
  imgSrc: StaticImageData;
  description: string;
  paragraph?: string;
};

export default function VisionMissionCard({
  title,
  imgSrc,
  description,
  paragraph,
}: VisionMissionProps) {
  return (
    <>
      <div>
        <Card className="border-black border max-w-[550px] h-full  rounded-[50px]">
          <CardContent className="my-4">
            <CardTitle className="text-[#D80000] mb-4 text-center font-bold text-3xl">
              {title}
            </CardTitle>

            <CardDescription className="flex gap-4 items-start">
              <Image src={imgSrc} alt="" className="object-cover" />

              <div className="text-base leading-8">
                <div>{description}</div>
                <br />
                <div>{paragraph}</div>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
