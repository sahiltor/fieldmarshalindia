import { productImage } from '@/lib/data';
import CardImg from '../card-img';

export default function ProductImg() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {productImage.map((products, index) => (
          <CardImg key={index} {...products} />
        ))}
      </div>
    </>
  );
}
