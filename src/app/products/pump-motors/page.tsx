import HeroImg from '@/components/ui/hero-img';
import ProductImg from '@/components/ui/product-img';
import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';

export default function PumpMotors() {
  return (
    <>
      <HeroImg />
      <Title title="Pumps & Motors" />
      <Section>
        <Wrapper>
          <ProductImg />
        </Wrapper>
      </Section>
    </>
  );
}
