import AboutExplain from '@/components/about-explain';
import LogoSlider from '@/components/logo-slider';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';
import VisionMissionExplain from '../components/vision-mission-explain';
import ApplicationExplain from '@/components/application-explain';
import ProductImg from '@/components/ui/product-img';
import FooterHome from '@/components/ui/footer-home';
import StripBg from '@/components/ui/strip-bg';

export default function Page() {
  return (
    <>
      <Section>
        <Wrapper>
          <AboutExplain />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <LogoSlider className="border-y" />
        </Wrapper>
      </Section>
      <Section className="bg-[#EFEFEF] ">
        <Wrapper>
          <VisionMissionExplain />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <ProductImg />
        </Wrapper>
      </Section>
      <FooterHome />
    </>
  );
}
