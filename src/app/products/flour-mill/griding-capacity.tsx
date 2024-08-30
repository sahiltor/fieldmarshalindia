import { grindingCapacityImg } from '@/lib/images';
import Image from 'next/image';
import React from 'react';
export default function GridingCapacity() {
  return (
    <>
      <div>
        <Image src={grindingCapacityImg} alt="Grinding Capacity " />
      </div>
    </>
  );
}
