import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  shallowFiveMocData,
  shallowFiveSpeciData,
  shallowOneAppList,
  shallowOneFeature,
} from '@/lib/data-product';
import { shallowWellFiveImg } from '@/lib/images';

export default function ShallowWellProductOne5() {
  return (
    <>
      <HeroProductImg
        imgSrc={shallowWellFiveImg}
        alt="Shallow Well Jet Pumps - 1.5 HP"
      />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Shallow Well Jet Pumps - 1.5 HP">
            <div>
              <p className="mb-3">
                Shallow Well Jet Pumps - 1.5 HP are designed for those who need
                a robust and efficient water supply solution for residential,
                agricultural, or light commercial applications. With a powerful
                1.5 HP motor, these pumps can draw water from shallow wells up
                to 25 feet deep, ensuring a steady and reliable flow even in
                demanding conditions. The enhanced horsepower allows for higher
                water pressure, making these pumps ideal for larger homes,
                gardens, and small-scale irrigation systems. Constructed with
                durable, corrosion-resistant materials, these pumps are built to
                withstand harsh environments and provide long-lasting
                performance.
              </p>
              <p className="mb-3">
                The compact and user-friendly design ensures easy installation
                and maintenance, while the energy-efficient motor helps to lower
                operational costs. Equipped with features like a built-in
                pressure switch and thermal overload protection, our Shallow
                Well Jet Pumps offer safe, automatic operation, making them a
                trusted choice for consistent and powerful water delivery.
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {shallowOneFeature.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {shallowOneAppList.map((shallow, index) => (
              <FeatureList key={index} {...shallow} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {shallowFiveSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {shallowFiveMocData.map((item, index) => (
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
