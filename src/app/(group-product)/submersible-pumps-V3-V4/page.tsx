import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import PumpTable from '@/components/ui/pump-table';
import Wrapper from '@/components/ui/wrapper';
import { submersibleAppList, submersibleV3Feature } from '@/lib/data-product';
import { submersibleImgV34 } from '@/lib/images';

export default function SubmersiblePumpsV3V4() {
  return (
    <>
      <HeroProductImg
        imgSrc={submersibleImgV34}
        alt="Submersible Pumps V3-V4</p>
"
      />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Submersible Pumps V3-V4">
            <div>
              <p className="mb-3">
                Submersible Pumps V3-V4 are designed for efficient and reliable
                water pumping in a variety of applications, including domestic,
                agricultural, and small industrial uses. Engineered to operate
                while fully submerged, these pumps are ideal for wells,
                boreholes, and water supply systems. The V3-V4 models are
                compact yet powerful, capable of delivering consistent water
                flow even from deep water sources.
              </p>
              <p className="mb-3">
                Crafted with high-quality, corrosion-resistant stainless steel,
                these pumps are built to withstand harsh underwater
                environments, ensuring long-lasting durability and performance.
                The advanced motor design ensures energy-efficient operation,
                reducing electricity consumption while providing optimal water
                output.
              </p>
              <p className="mb-3">
                {`Whether you're irrigating crops, supplying water to a household, or managing a small industrial operation, Submersible Pumps V3-V4 offer reliable and maintenance-free service. Their easy installation and low noise operation make them an excellent choice for anyone seeking a dependable water pumping solution. Trust in the V3-V4 series for all your deep water pumping needs.`}
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
            {submersibleAppList.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <PumpTable />
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
