import React from 'react';
import BorderTitle from './border-title';

export default function PumpTable() {
  return (
    <div className="">
      {/* Specifications Section */}
      <div className="mb-5">
        <BorderTitle title="Specifications" className="pl-3 mb-0" />
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border p-2  border-gray-300 px-2 py-1"></th>
              <th className="border p-2  border-gray-300 px-2 py-1">{`5" (125mm)`}</th>
              <th className="border p-2 border-gray-300">{`6" (150mm)`}</th>
              <th className="border p-2 border-gray-300">{`7" (175mm)`}</th>
              <th className="border p-2 border-gray-300">{`Janta (175-200mm)`}</th>
              <th className="border p-2 border-gray-300">{`8" (200mm)`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border font-bold border-gray-300 px-2 py-1">
                Power Range
              </td>
              <td className="border border-gray-300 p-2">
                3 - 7.5 HP
                <br />
                (2.2 - 5.6 kW)
              </td>
              <td className="border border-gray-300 p-2">
                3 - 30 HP
                <br />
                (2.2 - 22 kW)
              </td>
              <td className="border border-gray-300 p-2">
                5 - 30 HP
                <br />
                (3.7 - 22 kW)
              </td>
              <td className="border border-gray-300 p-2">
                6 - 30 HP
                <br />
                (4.5 - 22 kW)
              </td>
              <td className="border border-gray-300 p-2">
                10 - 50 HP
                <br />
                (7.5 - 37 kW)
              </td>
            </tr>
            <tr>
              <td className="border font-bold border-gray-300 px-2 py-1">
                Version
              </td>
              <td className="border border-gray-300 p-2">
                120-240V, 50 Hz, 1 Phase
              </td>
              <td
                colSpan={4}
                className="border text-center border-gray-300 p-2"
              >
                350-415V, 50 Hz, 3 Phase
              </td>
            </tr>
            <tr>
              <td className="border font-bold border-gray-300 px-2 py-1">
                Motor Type
              </td>
              <td
                className="border border-gray-300 p-2 text-center"
                colSpan={5}
              >
                Water cooled
              </td>
            </tr>
            <tr>
              <td className="border font-bold border-gray-300 px-2 py-1">
                Speed
              </td>
              <td
                className="border border-gray-300 p-2 text-center"
                colSpan={5}
              >
                2880rpm
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Flow Rate
              </td>
              <td className="border border-gray-300 p-2">350-50 LPM</td>
              <td className="border border-gray-300 p-2">1650-300 LPM</td>
              <td className="border border-gray-300 p-2">2000-450 LPM</td>
              <td className="border border-gray-300 p-2">3200-525 LPM</td>
              <td className="border border-gray-300 p-2">3400-1050LPM</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Total Head
              </td>
              <td className="border border-gray-300 p-2">9 to 60 Mtrs.</td>
              <td className="border border-gray-300 p-2">30 to 210 Mtrs.</td>
              <td className="border border-gray-300 p-2">18 to 190 Mtrs.</td>
              <td className="border border-gray-300 p-2">21 to 146 Mtrs.</td>
              <td className="border border-gray-300 p-2">74 to 276 Mtrs.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Outlet Size
              </td>
              <td className="border border-gray-300 p-2">{`2" - 2.5"`}</td>
              <td className="border border-gray-300 p-2">{`2.5" - 3"`}</td>
              <td className="border border-gray-300 p-2">{`3" - 4"`}</td>
              <td className="border border-gray-300 p-2">{`4"`}</td>
              <td className="border border-gray-300 p-2">{`4"`}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Direction of Rotation
              </td>
              <td
                className="border border-gray-300 p-2 text-center"
                colSpan={5}
              >
                CCW, CW-3Ph
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Max. Outer Diameter
              </td>
              <td className="border border-gray-300 p-2">125 mm</td>
              <td className="border border-gray-300 p-2">150 mm</td>
              <td className="border border-gray-300 p-2">175 mm</td>
              <td className="border border-gray-300 p-2">200 mm</td>
              <td className="border border-gray-300 p-2">200 mm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                Type of Duty
              </td>
              <td
                className="border border-gray-300 p-2 text-center "
                colSpan={5}
              >
                S1 (Continuous)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MOC Section */}
      <div className="">
        <BorderTitle title="MOC" className="pl-3 mb-0" />
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <td className="border border-gray-300 px-2 py-1 font-bold">
                PART NAME
              </td>

              <th className="border border-gray-300 p-2">{`5" (125mm)`}</th>
              <th className="border border-gray-300 p-2">{`6" (150mm)`}</th>
              <th className="border border-gray-300 p-2">{`7" (175mm)`}</th>
              <th className="border border-gray-300 p-2">{`Janta (175-200mm)`}</th>
              <th className="border border-gray-300 p-2">{`8" (200mm)`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-bold ">
                Stator Shell
              </td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Seal</td>
              <td className="border border-gray-300 p-2">Nitrile Rubber</td>
              <td className="border border-gray-300 p-2">Nitrile Rubber</td>
              <td className="border border-gray-300 p-2">Nitrile Rubber</td>
              <td className="border border-gray-300 p-2">Nitrile Rubber</td>
              <td className="border border-gray-300 p-2">Nitrile Rubber</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">
                Thrust Pad/Bearing
              </td>
              <td className="border border-gray-300 p-2">Graphite Carbon</td>
              <td className="border border-gray-300 p-2">Graphite Carbon</td>
              <td className="border border-gray-300 p-2">Graphite Carbon</td>
              <td className="border border-gray-300 p-2">Graphite Carbon</td>
              <td className="border border-gray-300 p-2">Graphite Carbon</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">
                Motor Base
              </td>
              <td className="border border-gray-300 p-2">Cast Iron</td>
              <td className="border border-gray-300 p-2">Cast Iron</td>
              <td className="border border-gray-300 p-2">Cast Iron</td>
              <td className="border border-gray-300 p-2">Cast Iron</td>
              <td className="border border-gray-300 p-2">Cast Iron</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Shaft</td>
              <td className="border border-gray-300 p-2">SS 410/EN-9</td>
              <td className="border border-gray-300 p-2">SS 410/EN-9</td>
              <td className="border border-gray-300 p-2">SS 410/EN-9</td>
              <td className="border border-gray-300 p-2">SS 410/EN-9</td>
              <td className="border border-gray-300 p-2">SS 410/EN-9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Impeller</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
              <td className="border border-gray-300 p-2">Stainless Steel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
