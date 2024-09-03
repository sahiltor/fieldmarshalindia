import React from 'react';

type ProductTitleProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function ProductTitle({ title, children }: ProductTitleProps) {
  return (
    <>
      <div className="mb-8">
        <div>
          <div>
            <h1 className="text-[#D80000] font-bold text-[30px] mb-4">
              {title}
            </h1>
          </div>

          <div className="text-[17px]">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
