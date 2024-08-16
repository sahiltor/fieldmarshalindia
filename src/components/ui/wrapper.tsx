import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('container', className)}>{children}</div>;
}
