import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  whiteDiamondAppList,
  whiteDiamondFeature,
  whiteDiamondMocData,
  whiteDiamondSpeciData,
} from '@/lib/data-product';
import { whiteDiamondImg } from '@/lib/images';

export default function WhiteDiamond() {
  return (
    <>
      <HeroProductImg imgSrc={whiteDiamondImg} alt="White Diamond - 0.5 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="White Diamond - 0.5 HP">
            <div>
              <p className="mb-3">
                The White Diamond - 0.5 HP pump is a versatile and efficient
                solution for residential water supply needs. Designed to deliver
                reliable performance, this pump is perfect for homes, gardens,
                and small-scale water transfer tasks. The 0.5 HP motor offers
                optimal power, ensuring steady water flow while maintaining
                energy efficiency.
              </p>
              <p className="mb-3">
                Crafted with precision, the White Diamond pump features a
                corrosion-resistant body that ensures durability and
                long-lasting service. Its compact design allows for easy
                installation, making it ideal for spaces where larger pumps
                might not fit. With its low noise operation, this pump provides
                a smooth and quiet experience, enhancing comfort at home.
              </p>
              <p className="mb-3">
                {`Whether you're watering your garden, filling a tank, or boosting water pressure in your household, the White Diamond - 0.5 HP pump is the dependable choice. It’s engineered to handle daily demands with minimal maintenance, ensuring a consistent and hassle-free water supply.`}
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {whiteDiamondFeature.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {whiteDiamondAppList.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {whiteDiamondSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {whiteDiamondMocData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* Pumped Liquids */}
          <div className="mb-5">
            <BorderTitle
              title="Pumped Liquids"
              className="pl-4"
              discrption="Clean, thin non-aggressive, non-explosive, clear, cold, fresh water without abrasives."
            />
          </div>
          <div>
            <LogoSlider className="border-t-2 border-red-500 pt-[5px] bor" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
