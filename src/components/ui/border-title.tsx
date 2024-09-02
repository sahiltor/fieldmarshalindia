import { cn } from '@/lib/utils';

type BorderTitleProps = {
  title: string;
  className?: string;
  discrption?: string;
};

export default function BorderTitle({
  title,
  className,
  discrption,
}: BorderTitleProps) {
  return (
    <div>
      <h1
        className={cn(
          'bg-[#D80000] pl-6 text-white font-bold text-[20px] mb-2',
          className
        )}
      >
        {title}
      </h1>
      <p className="font-medium text-lg">{discrption}</p>
    </div>
  );
}
