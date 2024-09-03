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
          <div className="w-full border-gray-300">
            <div className="grid grid-cols-2">
              <h1 className="py-1 border font-medium pl-4  text-lg">{label}</h1>

              <h1 className="py-1 border font-medium pl-4 text-lg">{value}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
