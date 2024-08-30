import React from 'react';
import Wrapper from './wrapper';

export default function FooterHome() {
  return (
    <>
      <footer className="bg-[#D80000] text-white">
        <Wrapper>
          <div className="flex gap-10 justify-center my-4 ">
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <h1 className="text-xl font-semibold my-4">
                Field Pump Private Limited
              </h1>
              <p>
                (Formally known as Field Pumps Private Limited). Add: Dashmesh
                Nagar, Sirhind, Distt. Fatehgarh Sahib, Punjab - 140 406 Web:
                www.fieldmarshalindia.com Email: sales@fieldmarshalindia.com
              </p>
              <h2>Toll Free No. 1800-891-0559</h2>
              <h2>CIN No. U31909DL2004PTC125625</h2>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d439466.7123397583!2d76.386203!3d30.624552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101a5daf098067%3A0xd143c949a0f1b569!2sField%20Pump%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1723828737759!5m2!1sen!2sus"
                width="500"
                height="300"
                style={{ border: '0' }}
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
