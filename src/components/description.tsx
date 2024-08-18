import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
type DescriptionProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Description({ title, children }: DescriptionProps) {
  return (
    <>
      <div className={cn('flex flex-col  justify-between')}>
        <div>
          <h1 className="text-[#D80000] font-bold text-3xl">{title}</h1>
          <div className="border w-24 border-[#D80000]"></div>
        </div>

        <div className="">
          <div>{children}</div>
        </div>

        <div>
          <Button
            variant="outline"
            className="text-white text-lg bg-[#D80000] px-9 py-6 hover:bg-[#D80000] hover:text-white"
          >
            Read More...
          </Button>
        </div>
      </div>
    </>
  );
}
