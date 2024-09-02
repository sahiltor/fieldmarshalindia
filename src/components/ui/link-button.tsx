// // components/LinkButton.tsx

import Link from 'next/link';
import { FC } from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      passHref
      className={`inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
