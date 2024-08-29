import Image, { StaticImageData } from 'next/image';

type FlourTitleTopProps = {
  imgSrc: StaticImageData;
  alt: string;
  description?: string;
};

export default function FlourTitleTop({
  imgSrc,
  alt,
  description,
}: FlourTitleTopProps) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center ">
        <div className="border-[1px] w-[461px] border-[#D80000] mt-3"></div>
        <div>
          <Image src={imgSrc} alt={alt} className=" scale-75 lg:scale-50" />
        </div>
        <div className="border-[1px] w-[461px] border-[#D80000] mb-3"></div>
      </div>
      <p className="text-center text-base">{description}</p>
    </div>
  );
}
