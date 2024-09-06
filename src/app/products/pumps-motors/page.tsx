import HeroProductImg from '@/components/hero-product-img';
import ProductImg from '@/components/ui/product-img';
import Section from '@/components/ui/section';
import Title from '@/components/ui/title';
import Wrapper from '@/components/ui/wrapper';
import { homeHero } from '@/lib/images';
import React from 'react';

export default function PumpMotors() {
  return (
    <>
      <HeroProductImg imgSrc={homeHero} alt="Pumps & Motors Image " />
      <Title title="Pumps & Motors" />
      <Section>
        <Wrapper>
          <ProductImg />
        </Wrapper>
      </Section>
    </>
  );
}
