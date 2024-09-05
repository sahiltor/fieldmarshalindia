type FeatureListProps = {
  item: string;
};

export default function FeatureList({ item }: FeatureListProps) {
  return (
    <div className="mb-2 ">
      <ul className="list-disc pl-10">
        <li className="font-medium text-[17px]">{item}</li>
      </ul>
    </div>
  );
}
