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
  FlowStarSpeciData,
  MocData,
} from '@/lib/data-product';
import { flowStarFiveImg } from '@/lib/images';

export default function EcoStar() {
  return (
    <>
      <HeroProductImg imgSrc={flowStarFiveImg} alt="Flow Star 0.5 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Flow Star 0.5 HP">
            <div>
              <p className="mb-3">
                The Flow Star 0.5 HP pump is the perfect solution for efficient
                and reliable water management in residential settings. Designed
                with a focus on performance and energy efficiency, this pump is
                ideal for small homes, gardens, and light water transfer tasks.
                The 0.5 HP motor provides a steady and consistent water flow,
                ensuring your daily water needs are met with ease.
              </p>
              <p className="mb-3">
                Built with high-quality, corrosion-resistant materials, the Flow
                Star pump is designed for long-lasting durability, even in
                challenging environments. Its compact design makes it easy to
                install in tight spaces, while the quiet operation ensures
                minimal disruption to your household.
              </p>
              <p className="mb-3">
                {`Whether you're watering your garden, boosting water pressure, or handling other small-scale water tasks, the Flow Star 0.5 HP pump offers reliable performance with minimal maintenance. It's the dependable choice for homeowners seeking an effective and economical water pumping solution that delivers consistent results.`}
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
            {FlowStarSpeciData.map((item, index) => (
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
