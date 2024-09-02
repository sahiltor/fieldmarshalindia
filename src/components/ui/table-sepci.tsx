import React from 'react';
type TableSepciProps = {
  label: string;
  value: string;
};
export default function TableSepci({ label, value }: TableSepciProps) {
  return (
    <>
      <div>
        <div>
          <table className="w-full md:w-2/4 border-gray-300">
            <tbody>
              <tr className="flex items-center   justify-between">
                <td className="py-1 font-medium text-lg">{label}</td>
                <td className="py-1 font-medium text-lg">{value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
