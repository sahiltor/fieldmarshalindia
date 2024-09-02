import React from 'react';
import Wrapper from './wrapper';

export default function Copyright() {
  return (
    <div className="bg-[#676767] border-t-2 border-white ">
      <Wrapper>
        <div className="flex justify-between items-center h-[80px] text-white">
          <h1>Copyright © 2024 Field Marshal</h1>
          <h1>Powered by Field Marshal</h1>
        </div>
      </Wrapper>
    </div>
  );
}
