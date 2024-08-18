import AboutExplain from '@/components/about-explain';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';

export default function Page() {
  return (
    <>
      <Section>
        <Wrapper>
          <AboutExplain />
        </Wrapper>
      </Section>
    </>
  );
}
