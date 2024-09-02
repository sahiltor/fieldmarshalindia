type FeatureListProps = {
  item: string;
};

export default function FeatureList({ item }: FeatureListProps) {
  return (
    <div className="mb-5">
      <ul className="list-disc pl-5">
        <li className="font-medium text-lg">{item}</li>
      </ul>
    </div>
  );
}
