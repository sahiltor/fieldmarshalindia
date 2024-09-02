import LogoSlider from '@/components/logo-slider';
import BorderTitle from '@/components/ui/border-title';
import FeatureList from '@/components/ui/feature-list';
import ProductTitle from '@/components/ui/product-title';
import Section from '@/components/ui/section';
import TableSepci from '@/components/ui/table-sepci';
import Wrapper from '@/components/ui/wrapper';
import {
  shallowAppList,
  shallowFeature,
  shallowMocData,
  shallowSpeciData,
} from '@/lib/data-product';

export default function ShallowWell() {
  return (
    <>
      <Section>
        <Wrapper>
          <div>
            <ProductTitle title="Shallow Well Jet Pumps">
              <div>
                <p className="mb-3">
                  Field Pumpsol Shallow Well Jet Pump with a powerful 0.5 HP
                  motor, designed to deliver efficient water supply solutions
                  for your home or small agricultural needs. Engineered for
                  durability and performance, this pump is ideal for shallow
                  wells with depths up to 25 feet. Its compact design allows for
                  easy installation and maintenance, making it a reliable choice
                  for residential water systems.
                </p>
                <p className="mb-3">
                  Our 0.5 HP Shallow Well Jet Pump is built with high-quality
                  materials that ensure long-lasting performance and resistance
                  to corrosion. The robust motor operates quietly while
                  delivering consistent water flow, making it perfect for daily
                  household use, garden irrigation, or filling water tanks. The
                  pump features a durable stainless steel housing and a
                  precision-engineered impeller that ensures smooth operation
                  and maximum efficiency.
                </p>
                <p className="mb-3">
                  Equipped with a built-in thermal overload protector, this pump
                  is safeguarded against overheating, providing you with peace
                  of mind and extending the lifespan of the motor. Additionally,
                  the pump’s self-priming design allows for easy start-up, even
                  after periods of non-use.
                </p>
                <p className="mb-3">
                  Whether you need a dependable water supply for your home,
                  garden, or small farm, our 0.5 HP Shallow Well Jet Pump offers
                  a reliable and cost-effective solution to meet your water
                  needs.
                </p>
              </div>
            </ProductTitle>
            {/* features */}
            <div className="mb-5">
              <BorderTitle title="Salient Features" />
              {shallowFeature.map((shallow, index) => (
                <FeatureList key={index} {...shallow} />
              ))}
            </div>
            {/* application */}
            <div className="mb-5">
              <BorderTitle title="Applications" />
              {shallowAppList.map((shallow, index) => (
                <FeatureList key={index} {...shallow} />
              ))}
            </div>
            {/* spcification */}
            <div className="mb-5">
              <BorderTitle title="Specifications" />
              {shallowSpeciData.map((item, index) => (
                <TableSepci key={index} {...item} />
              ))}
            </div>
            {/* moc */}
            <div className="mb-5">
              <BorderTitle title="MOC" className="pl-4" />
              {shallowMocData.map((item, index) => (
                <TableSepci key={index} {...item} />
              ))}
            </div>
            {/* Pumped Liquids */}
            <div className="mb-5">
              <BorderTitle
                title="Pumped Liquids"
                className="pl-4"
                discrption=" Clean, thin non-aggressive, non-explosive, clear, cold, fresh water without abrasives."
              />
            </div>
            <div>
              <LogoSlider />
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
