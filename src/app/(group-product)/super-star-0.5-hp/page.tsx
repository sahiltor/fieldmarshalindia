import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import { AppList, Feature, MocData, StarhpSpeciData } from '@/lib/data-product';
import { superStarfiveImg } from '@/lib/images';

export default function SuperStar05() {
  return (
    <>
      <HeroProductImg imgSrc={superStarfiveImg} alt="Super Star - 0.5 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Super Star - 0.5 HP">
            <div>
              <p className="mb-3">
                The Super Star - 0.5 HP pump is the ideal solution for efficient
                and reliable water management in residential settings. Perfect
                for small homes, gardens, and light water transfer tasks, this
                pump delivers consistent performance with its 0.5 HP motor,
                ensuring a steady water flow for daily needs.
              </p>
              <p className="mb-3">
                Constructed with high-quality, corrosion-resistant materials,
                the Super Star pump is designed for longevity and durability,
                even in harsh conditions. Its compact and lightweight design
                makes installation and maintenance simple and hassle-free,
                fitting easily into tight spaces. The pump operates quietly,
                providing a smooth and uninterrupted water supply without
                disturbing your environment.
              </p>
              <p className="mb-3">
                {`Energy-efficient and cost-effective, the Super Star - 0.5 HP pump offers an excellent balance of power and economy. Whether you need to water your garden, fill a tank, or boost household water pressure, this pump is a dependable choice that ensures consistent performance with minimal maintenance, making it a trusted partner for your water management needs.`}
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
            {StarhpSpeciData.map((item, index) => (
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
