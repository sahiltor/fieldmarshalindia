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
  MocData,
  StarSuperSpeciData,
} from '@/lib/data-product';
import { StarSuperProImg } from '@/lib/images';

export default function SuperStar() {
  return (
    <>
      <HeroProductImg imgSrc={StarSuperProImg} alt="Super Star - 1 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Super Star - 1 HP">
            <div>
              <p className="mb-3">
                The Super Star - 1 HP pump is a high-performance solution
                designed to meet the water supply needs of residential,
                agricultural, and light commercial applications. With a powerful
                1 HP motor, this pump ensures a steady and robust water flow,
                making it ideal for a variety of tasks including irrigation,
                water transfer, and boosting water pressure in homes and
                gardens. Built with top-grade, corrosion-resistant materials,
                the Super Star pump is engineered for durability and long-term
                reliability, even in demanding conditions.
              </p>
              <p className="mb-3">
                Its compact design allows for easy installation in a range of
                settings, while the energy-efficient operation ensures lower
                electricity costs without sacrificing performance. The pump
                operates quietly, providing a smooth and uninterrupted water
                supply.Whether you’re watering your garden, maintaining a small
                farm, or managing household water needs, the Super Star - 1 HP
                pump offers powerful, dependable, and efficient performance.
                It’s the trusted choice for anyone looking for a reliable water
                pumping solution.
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
            {StarSuperSpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {MocData.map((item, index) => (
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
