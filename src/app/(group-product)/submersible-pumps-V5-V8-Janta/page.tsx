import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  submersibleV3AppList,
  submersibleV3Feature,
  submersibleV3MocData,
  submersibleV3SpeciData,
} from '@/lib/data-product';
import { submersibleImgV34 } from '@/lib/images';

export default function SubmersiblePumpsJanta() {
  return (
    <>
      <HeroProductImg
        imgSrc={submersibleImgV34}
        alt="Submersible Pumps V5-V8 & Janta
"
      />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Submersible Pumps V3-V4">
            <div>
              <p className="mb-3">
                Submersible Pumps V5-V8 & Janta are engineered to deliver
                exceptional performance and reliability in a variety of
                demanding water pumping applications. Ideal for domestic,
                agricultural, and light industrial use, these pumps are designed
                to operate efficiently while fully submerged in water sources
                such as wells and boreholes.
              </p>
              <p className="mb-3">
                The V5-V8 models are known for their powerful, energy-efficient
                motors, providing consistent water flow and high performance
                even from deeper water levels. Constructed from durable,
                corrosion-resistant materials, these pumps are built to
                withstand harsh environments and ensure long-term reliability.
              </p>
              <p className="mb-3">
                {`The Janta model complements this range with robust performance tailored for diverse applications. Its rugged design and high efficiency make it an excellent choice for both residential and commercial water supply systems.`}
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {submersibleV3Feature.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {submersibleV3AppList.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {submersibleV3SpeciData.map((item, index) => (
              <TableSepci key={index} {...item} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {submersibleV3MocData.map((item, index) => (
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
