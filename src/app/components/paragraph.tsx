interface ParagraphProps {
  IconComponent: React.ReactElement;
  info: string;
  infoData: string | number;
}

export default function Paragraph({ IconComponent, info, infoData }: ParagraphProps) {
  return (
    <p className="flex gap-1">
      <span className="size-6 text-gray-700">{IconComponent}</span>
      <span className="font-medium">{info} </span>
      {infoData}
    </p>
  )
}