import React from 'react';
import VisionMissionCard from './vision-mission-card';
import { missionImg, visionImg } from '@/lib/images';
import Title from './ui/title';

export default function VisionMissionExplain() {
  return (
    <>
      <div className="flex justify-center gap-10 ">
        <div>
          <VisionMissionCard
            title="Vision"
            imgSrc={visionImg}
            description="We aim to be the most preferred supplier of the best quality products in the international pump industry. To be distinguished as a technical leader in the pump industry."
            paragraph=" To become a multi-pronged organisation, manufacturing pumps and motors of World class Quality and Finish, supported by pleasant Service to delight Customers Always."
          />
        </div>

        <VisionMissionCard
          title="Mission"
          imgSrc={missionImg}
          description="To exceed our customer expectations in quality, delivery, and cost through continuous improvement and customer interaction. To be known as the most authentic manufacturer in pump industry."
        />
      </div>
      <div>
        <Title title="Products" />
        <p className="text-center font-bold text-lg my-4">
          Flour Mills (Atta Chakki) | Agriculture Implements | Pumps & Motors |
          Castings Pulleys
        </p>
      </div>
    </>
  );
}
