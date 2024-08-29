import React from 'react';
type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl my-4 font-extrabold">{title}</h1>
      <div className="border-[1px] w-[110px] border-[#D80000]"></div>
    </div>
  );
}
