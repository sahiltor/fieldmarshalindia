import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  superStarHpAppList,
  superStarHpFeature,
  superStarHpMocData,
  superStarHpSpeciData,
} from '@/lib/data-product';
import { superStarHpImg } from '@/lib/images';

export default function SuperStarHpProduct() {
  return (
    <>
      <HeroProductImg imgSrc={superStarHpImg} alt="Super Star - 1 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Super Star - 1 HP">
            <div>
              <p className="mb-3">
                Field Pumpsol Super Star 1 HP Pump, your ultimate solution for
                efficient water supply in residential, agricultural, and light
                industrial applications. With its powerful 1 HP motor, this pump
                is designed to handle medium to large water distribution tasks,
                ensuring a consistent and reliable flow from wells, tanks, or
                water bodies.Built for durability, the Super Star 1 HP Pump
                features a robust cast iron body that resists corrosion and
                wear, guaranteeing long-lasting performance.
              </p>
              <p className="mb-3">
                The advanced impeller design maximizes water flow while
                minimizing energy consumption, making it an eco-friendly and
                cost-effective choice for your water needs. Ideal for a variety
                of uses, from irrigating gardens and fields to supplying water
                for domestic use, the Super Star 1 HP Pump is easy to install
                and maintain. Its quiet operation and efficient performance make
                it a dependable partner for ensuring a steady water supply, day
                in and day out.
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {superStarHpFeature.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {superStarHpAppList.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {superStarHpSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {superStarHpMocData.map((item, index) => (
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
