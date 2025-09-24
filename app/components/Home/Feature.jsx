import Image from "next/image";

export default function Feature({ d }) {
  const { icon, title, description } = d;
  return (
    <div className="pr-9 border-r border-[#F4F6F8] last:border-r-0">
      <div className="bg-[#ECFCEB] p-2 rounded-lg inline-block">
        <Image src={icon} width={24} height={24} alt={title}></Image>
      </div>
      <h3 className="text-[#212B36] text-lg font-bold mt-4 mb-1">{title}</h3>
      <p className="text-[#637381] text-sm">{description}</p>
    </div>
  );
}
