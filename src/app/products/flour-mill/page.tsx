import React from 'react';
import FlourHealth from './flour-health';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import IraProduct from './ira-product';
import StripBg from '@/components/ui/strip-bg';
import AaharProduct from './aahar-product';
import ShaktiProduct from './shakti-product';
import SantushtiProduct from './santushti-product';
import GridingCapacity from './griding-capacity';
import AnnapurnaProduct from './annapurna-product';
import HeroImg from '@/components/ui/hero-img';

export default function FlourMill() {
  return (
    <>
      <HeroImg />
      <FlourHealth />
      {/* ira product */}
      <Section className="bg-[#FDD595] -z-50 pt-0 relative">
        <StripBg />
        <Wrapper>
          <IraProduct />
        </Wrapper>
      </Section>
      {/* aahar product */}
      <Section className="bg-[#feebc9] -z-50 pt-0 relative">
        <StripBg />
        <Wrapper>
          <AaharProduct />
        </Wrapper>
      </Section>
      {/* shakti product */}
      <Section className="bg-[#FDD595] -z-50 pt-0 relative">
        <StripBg />
        <Wrapper>
          <ShaktiProduct />
        </Wrapper>
      </Section>
      {/* santushti product */}
      <Section className="bg-[#feebc9] -z-50 pt-0 relative">
        <StripBg />
        <Wrapper>
          <SantushtiProduct />
        </Wrapper>
      </Section>
      <Section className="bg-[#FDD595] pt-0 ">
        <Wrapper>
          <AnnapurnaProduct />
        </Wrapper>
      </Section>
      {/* GridingCapacity */}
      <GridingCapacity />
    </>
  );
}
