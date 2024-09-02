import { productImage } from '@/lib/data';
import ApplicationExplain from '../application-explain';
import CardImgProduct from './card-img-product';

export default function ProductImg() {
  return (
    <>
      <div className="relative min-h-screen ">
        {/* Fixed Background Image */}

        {/* Scrollable Content */}
        <div className="">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {productImage.map((products, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                {products && (
                  <CardImgProduct {...products} href={products.href || ''} />
                )}
              </div>
            ))}
          </div>
          <ApplicationExplain />
        </div>
      </div>
    </>
  );
}
