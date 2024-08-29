import React from 'react';
import FlourHealth from './flour-health';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import IraProduct from './ira-product';
import StripBg from '@/components/ui/strip-bg';

export default function FlourMill() {
  return (
    <>
      <FlourHealth />
      <Section className="bg-[#FDD595] -z-50 pt-0 relative">
        <StripBg />
        <Wrapper>
          <IraProduct />
        </Wrapper>
      </Section>
    </>
  );
}
