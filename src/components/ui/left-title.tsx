import React from 'react';
type LeftTitleProps = {
  title: string;
};

export default function LeftTitle({ title }: LeftTitleProps) {
  return (
    <div>
      <h1 className="text-[#D80000] font-bold text-3xl">{title}</h1>
      <div className="border w-24 border-[#D80000]"></div>
    </div>
  );
}
