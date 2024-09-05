'use client';
import { useState } from 'react';
import BorderTitle from './border-title';

export default function PumpJanta() {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const specs = [
    {
      size: '3" (72 mm)',
      powerRange: '0.75 HP to 1 HP (0.55-0.75 kW)',
      voltageRange: '160-240V',
      frequency: '50 Hz, Single Phase',
      cooling: 'Oil Cooled/Water cooled',
      speed: '2880rpm',
      flowRate: '85-10 LPM',
      totalHead: '12 to 75 Meters',
      outletSize: '1" - 1.25"',
      directionOfRotation: 'CCW',
      maxOuterDiameter: '80 mm',
      typeOfDuty: 'S1 (Continious)',
    },
    {
      size: '4" (100 mm)',
      powerRange: '0.5 HP to 5 HP (0.37 - 3.7 kW)',
      voltageRange: '120-240V',
      frequency: '50 Hz, Single Phase',
      cooling: 'Oil Cooled/Water cooled',
      speed: '2880rpm',
      flowRate: '475-35 LPM',
      totalHead: '20 to 300 Meters',
      outletSize: '1"-2.5"',
      directionOfRotation: 'CCW, CW-3Ph',
      maxOuterDiameter: '105 mm',
      typeOfDuty: 'S1 (Continious)',
    },
  ];

  return (
    <div className="bg-gray-100">
      <BorderTitle title="Specifications" className="pl-3 mb-0" />

      <main className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Specifications
        </h1> */}

        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Select Size
            </h2>
            <div className="flex gap-4">
              {specs.map(spec => (
                <div key={spec.size}>
                  <input
                    type="radio"
                    id={spec.size}
                    name="size"
                    value={spec.size}
                    checked={selectedSize === spec.size}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor={spec.size} className="cursor-pointer">
                    {spec.size}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-gray-800">
                  Specification
                </th>
                <th className="px-4 py-2 font-bold text-gray-800">Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.find(spec => spec.size === selectedSize) && (
                <>
                  <tr>
                    <td className="px-4 py-2">Power Range</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.powerRange
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Voltage Range</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.voltageRange
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Frequency</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.frequency
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Cooling</td>
                    <td className="px-4 py-2">
                      {specs.find(spec => spec.size === selectedSize)?.cooling}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Speed</td>
                    <td className="px-4 py-2">
                      {specs.find(spec => spec.size === selectedSize)?.speed}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Flow Rate</td>
                    <td className="px-4 py-2">
                      {specs.find(spec => spec.size === selectedSize)?.flowRate}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Total Head</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.totalHead
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Outlet Size</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.outletSize
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Direction of Rotation</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.directionOfRotation
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Maximum Outer Diameter</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.maxOuterDiameter
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Type of Duty</td>
                    <td className="px-4 py-2">
                      {
                        specs.find(spec => spec.size === selectedSize)
                          ?.typeOfDuty
                      }
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <BorderTitle title="Specifications" className="pl-3 mb-0" />
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 font-bold text-gray-800">Part Name</th>
              <th className="px-4 py-2 font-bold text-gray-800">
                {`3" (72 mm)`}
              </th>
              <th className="px-4 py-2 font-bold text-gray-800">
                {`  4" (100 mm)`}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Stator Shell</td>
              <td className="px-4 py-2">Stainless Steel</td>
              <td className="px-4 py-2">Stainless Steel</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Seal</td>
              <td className="px-4 py-2">Nitrile Rubber</td>
              <td className="px-4 py-2">Nitrile Rubber</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Thrust Pad/Bearing</td>
              <td className="px-4 py-2">Graphite Carbon/Bearing Steel</td>
              <td className="px-4 py-2">Graphite Carbon/Bearing Steel</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Motor Base</td>
              <td className="px-4 py-2">Cast Iron</td>
              <td className="px-4 py-2">Cast Iron</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Shaft</td>
              <td className="px-4 py-2">SS 410</td>
              <td className="px-4 py-2">SS 410/EN-9</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Impeller</td>
              <td className="px-4 py-2">Noryl</td>
              <td className="px-4 py-2">Noryl</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
