import React from 'react';

type ProductTitleProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function ProductTitle({ title, children }: ProductTitleProps) {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="text-[#D80000] font-bold text-[30px]">{title}</h1>
          </div>

          <div className="text-base">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
