import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type BgImageProps = {
  bgImg: StaticImageData | string;
  alt: string;
  className?: string;
};
export default function BgImage({ bgImg, className, alt }: BgImageProps) {
  return (
    <div className="absolute h-full w-full -z-[1]">
      <Image
        src={bgImg}
        alt={alt}
        className={cn('object-cover', className)}
        fill
        loading="lazy"
      />
    </div>
  );
}
