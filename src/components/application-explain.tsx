import React from 'react';
import ApplicationSection from './ui/application-section';
import { fieldapp } from '@/lib/data';
import Wrapper from './ui/wrapper';
import Title from './ui/title';

export default function ApplicationExplain() {
  return (
    <>
      <div className="mt-6">
        <div className="text-center">
          <Title
            title="Our Applications
"
          />
          <p className="text-center   my-4">
            Fieldmarshal Pumps provides a range of solutions in many areas with
            its array of world class, cost & energy efficient pumps.
          </p>
        </div>
        <Wrapper>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            {fieldapp.map((fieldapps, index) => (
              <ApplicationSection key={index} {...fieldapps} />
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
}
