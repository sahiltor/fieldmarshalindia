import { colorStrigBg } from '@/lib/images';
import Image from 'next/image';
import React from 'react';

export default function StripBg() {
  return (
    <div className="hidden sm:block">
      <Image
        src={colorStrigBg}
        alt=""
        className="absolute w-full translate-y-full -z-50"
      />
    </div>
  );
}
