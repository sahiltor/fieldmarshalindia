import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

interface ProductProps {
  product: {
    title: string;
    description: string;
    image: string;
    features: {
      title: string;
      description: string;
    }[];
    applications: string[];
    specifications: {
      title: string;
      value: string;
    }[];
    moc: {
      part: string;
      material: string;
    }[];
    pumpedLiquids: string;
    certifications: {
      name: string;
      image: string;
    }[];
  };
}

const ProductPage: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center">{product.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-gray-700">{product.description}</p>
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="list-disc pl-6">
              {product.features.map(feature => (
                <li key={feature.title} className="text-gray-700">
                  <span className="font-bold">{feature.title}:</span>{' '}
                  {feature.description}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold">Applications</h2>
            <ul className="list-disc pl-6">
              {product.applications.map(application => (
                <li key={application} className="text-gray-700">
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Specifications</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold text-left">Title</th>
              <th className="py-2 px-4 border-b font-bold text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {product.specifications.map(spec => (
              <tr key={spec.title}>
                <td className="py-2 px-4 border-b text-gray-700">
                  {spec.title}
                </td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold">Materials of Construction (MOC)</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold text-left">
                Part Name
              </th>
              <th className="py-2 px-4 border-b font-bold text-left">
                Material
              </th>
            </tr>
          </thead>
          <tbody>
            {product.moc.map(moc => (
              <tr key={moc.part}>
                <td className="py-2 px-4 border-b text-gray-700">{moc.part}</td>
                <td className="py-2 px-4 border-b text-gray-700">
                  {moc.material}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold">Pumped Liquids</h2>
        <p className="text-gray-700">{product.pumpedLiquids}</p>

        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {product.certifications.map(certification => (
            <div
              key={certification.name}
              className="flex flex-col items-center"
            >
              <Image
                src={certification.image}
                alt={certification.name}
                width={100}
                height={100}
              />
              <p className="text-gray-700">{certification.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const product = {
    title: 'Shallow Well Jet Pumps 0.5 HP',
    description:
      'Field Pumpsol Shallow Well Jet Pump with a powerful 0.5 HP motor, designed to deliver efficient water supply solutions for your home or small agricultural needs.',
    image: '/product-image.jpg', // Replace with your actual image path
    features: [
      {
        title: 'Light Weight',
        description: 'Helps in easy installation.',
      },
      {
        title: 'High Head Pump',
        description: 'With better discharge.',
      },
      {
        title: 'Thermal Overload Protector (TOP)',
        description: 'Prevents motor burning.',
      },
      {
        title: 'Moisture Resistance',
        description:
          'Motor windings are vacuum impregnated with synthetic varnish for better moisture resistance.',
      },
      {
        title: 'Mechanical Seal',
        description: 'For effective sealing against water leakage.',
      },
      {
        title: 'Extruded Aluminum Body',
        description:
          'Corrosion resistant and helps in better heat dissipation.',
      },
    ],
    applications: [
      'Shallow Wells',
      'Domestic',
      'Minor irrigation and agricultural needs',
      'Industrial and Public water supply schemes',
      'Construction sites',
      'Booster Installation',
    ],
    specifications: [
      {
        title: 'Power Range',
        value: '0.5 HP/0.37 kW',
      },
      {
        title: 'Voltage Range',
        value: '140-240V 1Ph 50Hz',
      },
      {
        title: 'Speed',
        value: '2880rpm',
      },
      {
        title: 'Flow Rate',
        value: 'Upto 48 LPM',
      },
      {
        title: 'Head Range',
        value: 'Upto 28 meters',
      },
      {
        title: 'Outlet size in inches',
        value: '1 inch',
      },
      {
        title:
          'Inlet size in inches Direction of Rotation Type of Duty Suction',
        value: '1 inch',
      },
    ],
    moc: [
      {
        part: 'Impeller',
        material: 'Noryl/Cast Iron',
      },
      {
        part: 'Delivery Casing',
        material: 'Cast Iron (FG 200)',
      },
      {
        part: 'Adaptor Motor Body',
        material: 'Extruded Aluminium/Cast Iron',
      },
      {
        part: 'Mechanical Seal',
        material: 'Carbon-Graphite',
      },
      {
        part: 'Pump Shaft',
        material: 'SS 410/EN8',
      },
    ],
    pumpedLiquids:
      'Clean, thin non-aggressive, non-explosive, clear, cold, fresh water without abrasives.',
    certifications: [
      {
        name: 'JAS-ANZ',
        image: '/jas-anz.png', // Replace with your actual image path
      },
      {
        name: 'IS: 6595',
        image: '/is-6595.png', // Replace with your actual image path
      },
      {
        name: 'IS: 8034',
        image: '/is-8034.png', // Replace with your actual image path
      },
      {
        name: 'IS: 8472',
        image: '/is-8472.png', // Replace with your actual image path
      },
      {
        name: 'NSIC',
        image: '/nsic.png', // Replace with your actual image path
      },
    ],
  };

  return {
    props: { product },
  };
};

export default ProductPage;
