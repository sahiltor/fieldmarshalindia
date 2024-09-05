import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  AppList,
  Feature,
  flowStarMocData,
  flowStarSpeciData,
} from '@/lib/data-product';
import { flowStarImg } from '@/lib/images';

export default function FlowStarHp() {
  return (
    <>
      <HeroProductImg imgSrc={flowStarImg} alt="Flow Star - 1 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Flow Star - 1 HP">
            <div>
              <p className="mb-3">
                The Flow Star - 1 HP pump is a high-performance solution
                designed to meet your water management needs with efficiency and
                reliability. Ideal for residential, agricultural, and light
                commercial applications, this pump delivers a powerful 1 HP
                motor that ensures a steady and robust water flow for tasks such
                as irrigation, water transfer, and pressure boosting.Constructed
                with high-quality, corrosion-resistant materials, the Flow Star
                pump is built to last, even in demanding conditions. Its
                energy-efficient design helps to minimize operational costs
                while maintaining optimal performance. The compact and
                user-friendly design allows for easy installation and
                maintenance, making it suitable for a variety of setups.
              </p>
              <p className="mb-3">
                With its smooth and quiet operation, the Flow Star - 1 HP pump
                provides consistent and dependable water delivery without
                disrupting your environment. Whether you need to enhance water
                pressure or manage a water supply system, this pump offers the
                reliability and efficiency you need for effective water
                management.
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {Feature.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {AppList.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {flowStarSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {flowStarMocData.map((item, index) => (
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
