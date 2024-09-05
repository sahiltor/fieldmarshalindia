import { productImage } from '@/lib/data';
import ApplicationExplain from '../application-explain';
import CardImgProduct from './card-img-product';

export default function ProductImg() {
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productImage.map((products, index) => (
              <div key={index} className="">
                {products && (
                  <CardImgProduct {...products} href={products.href || ''} />
                )}
              </div>
            ))}
          </div>
        </div>
        <ApplicationExplain />
      </div>
    </>
  );
}
