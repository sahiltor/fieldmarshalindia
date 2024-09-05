import { colorStrigBg } from '@/lib/images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default function StripBg({ className }: { className?: string }) {
  return (
    <div className="hidden absolute  h-full w-full -z-[50] sm:hidden">
      <Image
        src={colorStrigBg}
        alt=""
        className={cn('object-cover', className)}
        loading="lazy"
      />
    </div>
  );
}
