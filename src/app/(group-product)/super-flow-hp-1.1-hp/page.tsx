import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  superFlowSpeciData,
  whiteDiamondAppList,
  whiteDiamondFeature,
  whiteDiamondMocData,
} from '@/lib/data-product';
import { superFlowImg } from '@/lib/images';

export default function SuperFlowHp() {
  return (
    <>
      <HeroProductImg imgSrc={superFlowImg} alt="Super Flow - 1.1 HP" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Super Flow - 1.1 HP">
            <div>
              <p className="mb-3">
                The Super Flow - 1.1 HP pump is engineered to deliver
                exceptional water pumping performance for residential,
                agricultural, and light commercial applications. With its
                powerful 1.1 HP motor, this pump ensures a robust and consistent
                water flow, making it ideal for tasks such as irrigation, water
                transfer, and boosting water pressure in homes and gardens.
              </p>
              <p className="mb-3">
                Built with high-quality, corrosion-resistant materials, the
                Super Flow pump is designed for durability and long-lasting
                service, even in challenging environments. Its compact and
                user-friendly design allows for easy installation and
                maintenance, saving you time and effort. The pump’s
                energy-efficient operation helps to reduce electricity costs
                while delivering optimal performance.
              </p>
              <p className="mb-3">
                {`Whether you're managing water supply for your home, farm, or small business, the Super Flow - 1.1 HP pump offers reliability and efficiency. It’s the perfect solution for those who need a dependable pump that can handle demanding water pumping tasks with ease and consistency.`}
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {whiteDiamondFeature.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {whiteDiamondAppList.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {superFlowSpeciData.map((item, index) => (
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
