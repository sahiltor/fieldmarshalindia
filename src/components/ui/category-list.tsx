import Image, { StaticImageData } from 'next/image';

type CategoryListProps = {
  imgSrc?: StaticImageData | string;
  alt?: string;
};

export default function CategoryList({ imgSrc, alt }: CategoryListProps) {
  return (
    <>
      <div>
        <Image
          src={imgSrc as string}
          alt={alt as string}
          className="object-cover"
        />
      </div>
    </>
  );
}
