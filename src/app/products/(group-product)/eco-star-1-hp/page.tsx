import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  AppList,
  ecoStarSpeciData,
  Feature,
  MocData,
} from '@/lib/data-product';
import { ecoStarImg } from '@/lib/images';

export default function EcoStar() {
  return (
    <>
      <HeroProductImg imgSrc={ecoStarImg} alt="Eco Star - 1 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Eco Star - 1 HP">
            <div>
              <p className="mb-3">
                The Eco Star - 1 HP pump is designed for those who seek powerful
                performance combined with energy efficiency. Ideal for
                residential, agricultural, and small commercial applications,
                this pump is engineered to deliver reliable water flow with a 1
                HP motor, making it perfect for tasks such as irrigation, water
                transfer, and boosting household water pressure.
              </p>
              <p className="mb-3">
                Crafted with high-quality, corrosion-resistant materials, the
                Eco Star pump ensures durability and long-lasting service, even
                in challenging environments. Its eco-friendly design emphasizes
                energy efficiency, helping to reduce operational costs while
                maintaining optimal performance. The compact and user-friendly
                design allows for easy installation and maintenance, fitting
                seamlessly into any setup.
              </p>
              <p className="mb-3">
                {`The Eco Star - 1 HP pump is the perfect solution for those who need consistent and powerful water delivery without compromising on energy consumption. Whether you're managing water for your home, garden, or small farm, this pump offers dependable performance that you can trust, day after day.`}
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
            {ecoStarSpeciData.map((item, index) => (
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
