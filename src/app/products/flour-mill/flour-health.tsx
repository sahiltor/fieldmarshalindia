import CardImg from '@/components/card-img';
import Description from '@/components/description';
import Wrapper from '@/components/ui/wrapper';
import { pulse_1, pulse_2, pulse_3, pulse_4 } from '@/lib/images';
import React from 'react';

export default function FlourHealth() {
  return (
    <>
      <div className="bg-[#feebc9] pt-5 pb-7">
        <Wrapper>
          <div className="flex flex-col sm:flex-row items-center  justify-between gap-8 ">
            <div className=" flex  ">
              <Description>
                <div>
                  <h1 className="text-[#D80000] font-bold text-[42px] mb-2">
                    Flour that Gives you 3H Health | Hygiene | Happiness
                  </h1>
                  <div className="border w-80 border-[#D80000]"></div>
                </div>
                <div className="flex gap-4 flex-col my-4 text-base">
                  <p>
                    Fieldmarshal Flour Mill as the name suggests is an
                    Electrical appliance used in grinding Flour, Masala from the
                    grains like Wheat, Corn, Bajra, Rice, Spices etc. Keeping in
                    view of Hygiene, Safety, Purity and Food Grade quality
                    material has been used for the desired output at very
                    economical, competitive price range. It is completely user
                    and Eco Friendly Appliance as whole operation is Fully
                    Automatic and Dust Free.
                  </p>
                  <p>
                    Depending upon the Capacity and User Friendly Technique in
                    the machine can grind Purest form of Flour From Wheat, Rice,
                    Pulses, Maize, Corn, Bajra, Millets, Coffee, Dalia etc.
                    inside own Kitchen.
                  </p>
                </div>
              </Description>
            </div>
            {/* image */}
            <div>
              <div className="grid gap-4  lg:grid-cols-2">
                <div>
                  <CardImg imgSrc={pulse_1} />
                </div>
                <div>
                  <CardImg imgSrc={pulse_2} />
                </div>
                <div>
                  <CardImg imgSrc={pulse_3} />
                </div>
                <div>
                  <CardImg imgSrc={pulse_4} />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
