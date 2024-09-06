import React from 'react';
type LeftTitleProps = {
  title: string;
};

export default function LeftTitle({ title }: LeftTitleProps) {
  return (
    <div className=" sm:flex sm:flex-col  sm:text-left content-center	 mx-auto">
      <h1 className="text-[#D80000] sm:text-left items-center font-bold text-3xl">
        {title}
      </h1>
      <div className="border-b text-center w-24 sm:text-left items-center border-[#D80000]"></div>
    </div>
  );
}
