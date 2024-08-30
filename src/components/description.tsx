import React from 'react';

type DescriptionProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function Description({ title, children }: DescriptionProps) {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text-[#D80000] font-bold text-3xl">{title}</h1>
          </div>

          <div className="">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
