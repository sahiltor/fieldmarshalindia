'use client';
import { useState } from 'react';

interface Product {
  title: string;
  link: string;
}

const products: Product[] = [
  { title: 'Solar Pumps', link: '/solar-pumps' },
  { title: 'Domestic Range', link: '/domestic-range' },
  { title: 'Industrial Range', link: '/industrial-range' },
  { title: 'Agriculture Range', link: '/agriculture-range' },
  { title: 'International Range', link: '/international-range' },
  { title: 'Submersible Motors', link: '/submersible-motors' },
  { title: 'Accessories', link: '/accessories' },
  {
    title: 'Oswal Solar Pump Controller',
    link: '/oswal-solar-pump-controller',
  },
  { title: 'Oswal Genius Control Panel', link: '/oswal-genius-control-panel' },
];

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleMenu}
        className="cursor-pointer flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Products
        <svg
          className="ml-2 -mr-1 w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {products.map(product => (
              <a
                href={product.link}
                key={product.title}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                role="menuitem"
                tabIndex={-1}
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
