import Image, { StaticImageData } from 'next/image';

type FlourTitleTopProps = {
  imgSrc: StaticImageData;
  alt: string;
  description: string;
};

export default function FlourTitleTop({
  imgSrc,
  alt,
  description,
}: FlourTitleTopProps) {
  return (
    <div>
      <div className="flex-row sm:flex-col justify-center items-center ">
        <div className="border-[1px] w-[461px] border-[#D80000]"></div>
        <div>
          <Image src={imgSrc} alt={alt} className="scale-50" />
        </div>
        <div className="border-[1px] w-[461px] border-[#D80000]"></div>
      </div>
      <p className="text-center text-base">{description}</p>
    </div>
  );
}
