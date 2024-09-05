import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn('py-[3rem]', className)}>{children}</section>;
}
