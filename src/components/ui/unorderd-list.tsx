// // components/UnorderedList.tsx

// import React from 'react';

// interface UnorderedListProps<T> {
//   items: T[];
//   subtitle?: string;
//   renderItem: (item: T) => React.ReactNode;
// }

// const UnorderedList = <T,>({
//   subtitle,
//   items,
//   renderItem,
// }: UnorderedListProps<T>) => {
//   return (
//     <>
//       <h1 className="bg-[#D80000] text-white font-bold text-[20px]">
//         {subtitle}
//       </h1>
//       <ul className="list-disc pl-5 space-y-2">
//         {items.map((item, index) => (
//           <li key={index} className="p-2 bg-gray-100 rounded-lg shadow-sm">
//             {renderItem(item)}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default UnorderedList;
