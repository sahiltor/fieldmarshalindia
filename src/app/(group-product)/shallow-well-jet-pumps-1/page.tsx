import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  shallowOneAppList,
  shallowOneFeature,
  shallowOneMocData,
  shallowOneSpeciData,
} from '@/lib/data-product';
import { shallowWellOneImg } from '@/lib/images';

export default function ShallowWellProduct1() {
  return (
    <>
      <HeroProductImg
        imgSrc={shallowWellOneImg}
        alt="Shallow Well Jet Pumps - 1 HP"
      />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Shallow Well Jet Pumps - 1 HP">
            <div>
              <p className="mb-3">
                Shallow Well Jet Pumps - 1 HP are the perfect solution for
                reliable and efficient water supply in residential and light
                commercial settings. Designed to draw water from shallow wells
                up to 25 feet deep, these pumps combine durability with
                performance. The 1 HP motor delivers powerful suction, ensuring
                consistent water flow to meet your household or small farm
                needs. Built with corrosion-resistant materials, these pumps are
                engineered to withstand tough environments, offering
                long-lasting service.
              </p>
              <p className="mb-3">
                {`The compact design allows for easy installation in tight spaces, while the energy-efficient operation helps reduce electricity costs. Whether you're supplying water for irrigation, home use, or livestock, our Shallow Well Jet Pumps provide the dependable performance you can trust. With features like a built-in pressure switch and thermal overload protection, these pumps ensure safe and automatic operation, making them an excellent choice for maintaining a steady water supply.`}
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
            {shallowOneSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {shallowOneMocData.map((item, index) => (
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
