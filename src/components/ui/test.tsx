import { flowStarFiveImg } from '@/lib/images';
import Image from 'next/image';
import React from 'react';

interface ProductProps {
  title: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ title, description }) => {
  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      <div className="relative h-48 overflow-hidden rounded-md">
        <Image src={flowStarFiveImg} alt="" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const ProductsTest: React.FC = () => {
  const products: ProductProps[] = [
    {
      title: 'Shallow Well Jet Pumps-0.5 HP',
      description:
        'A shallow well jet pump is a type of water pump that is used to pump water from shallow wells.',
    },
    {
      title: 'Centrifugal Monoblock',
      description:
        'A centrifugal monoblock pump is a type of water pump that uses a centrifugal force to move water.',
    },
    {
      title: 'Super Star-0.5 HP',

      description:
        'A Super Star pump is a type of water pump that is designed for high performance.',
    },
    {
      title: 'Submersible Pumps-V5-V8 Janta',

      description:
        'A submersible pump is a type of water pump that is designed to be submerged in water.',
    },
    {
      title: 'Super Star-1 HP',
      description:
        'A Super Star pump is a type of water pump that is designed for high performance.',
    },
    {
      title: 'White Diamond-0.5 HP',

      description:
        'A White Diamond pump is a type of water pump that is known for its reliability.',
    },
    {
      title: 'Ecostar-1 HP',

      description:
        'An Ecostar pump is a type of water pump that is designed to be energy efficient.',
    },
    {
      title: 'Super Suction-0.5 HP to 1.5 HP',

      description:
        'A Super Suction pump is a type of water pump that is designed for high suction power.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Product key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsTest;
