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
import { superSuctionTenImg } from '@/lib/images';

export default function EcoStar() {
  return (
    <>
      <HeroProductImg
        imgSrc={superSuctionTenImg}
        alt="Super Suction/Ten D pump - 0.5 to 1.5 HP"
      />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Super Suction/Ten D pump - 0.5 to 1.5 HP">
            <div>
              <p className="mb-3">
                The Super Suction /Ten D pump range, available from 0.5 to 1.5
                HP, offers versatile and powerful water pumping solutions for
                residential, agricultural, and light industrial applications.
                Designed to deliver high performance, these pumps excel in
                providing robust water flow for various tasks including
                irrigation, water transfer, and boosting water pressure.
              </p>
              <p className="mb-3">
                Featuring advanced suction capabilities, the Super Suction / Ten
                D pumps efficiently draw water from shallow and moderately deep
                sources, ensuring reliable performance even in challenging
                conditions. Constructed with durable, corrosion-resistant
                materials, these pumps are built to withstand harsh environments
                and provide long-lasting service.
              </p>
              <p className="mb-3">
                {`The range includes models from 0.5 to 1.5 HP, catering to different water flow requirements and ensuring that you get the right power for your needs. With energy-efficient motors and easy installation, these pumps offer both cost-effectiveness and convenience. Choose the Super Suction / Ten D pump range for dependable, high-performance water management.`}
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
