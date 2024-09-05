import HeroProductImg from '@/components/hero-product-img';
import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  monoBlockAppList,
  monoBlockFeature,
  monoBlockMocData,
  monoBlockSpeciData,
} from '@/lib/data-product';
import { monoBlockImg } from '@/lib/images';

export default function CentrifugalMonoblock() {
  return (
    <>
      <HeroProductImg imgSrc={monoBlockImg} alt="Centrifugal Monoblock" />
      <Wrapper>
        <div className="pb-5 pt-5">
          <ProductTitle title="Centrifugal Monoblock">
            <div>
              <p className="mb-3">
                Centrifugal Monoblock Pumps are engineered to provide efficient
                and reliable water pumping solutions for a wide range of
                applications, including domestic, agricultural, and industrial
                use. These pumps are designed with a robust single-unit
                construction, integrating the pump and motor into a compact,
                easy-to-install system. Known for their high efficiency,
                Centrifugal Monoblock Pumps offer consistent water flow and are
                ideal for water transfer, irrigation, and pressure boosting
                tasks.
              </p>
              <p className="mb-3">
                Constructed with durable, corrosion-resistant materials, these
                pumps ensure longevity and dependable performance even in
                demanding conditions. The motor is optimized for energy
                efficiency, reducing operational costs while delivering powerful
                performance. With a focus on smooth, quiet operation,
                Centrifugal Monoblock Pumps are user-friendly and require
                minimal maintenance. Whether you need to supply water to a large
                household, irrigate crops, or manage water in industrial
                processes, these pumps offer a reliable solution that meets your
                needs with ease and efficiency.
              </p>
            </div>
          </ProductTitle>
          {/* features */}

          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Salient Features" />
            {monoBlockFeature.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>
          {/* application */}
          <div className="mb-5 border border-gray-300">
            <BorderTitle title="Applications" />
            {monoBlockAppList.map((items, index) => (
              <FeatureList key={index} {...items} />
            ))}
          </div>

          {/* spcification */}
          <div className="mb-5">
            <BorderTitle title="Specifications" className="pl-3" />
            {monoBlockSpeciData.map((items, index) => (
              <TableSepci key={index} {...items} />
            ))}
          </div>
          {/* moc */}
          <div className="mb-5">
            <BorderTitle title="MOC" className="pl-4" />
            {monoBlockMocData.map((items, index) => (
              <TableSepci key={index} {...items} />
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
