import Image from "next/image";

export default function Review({ review }) {
  const { name, image, designation, message } = review;
  return (
    <div className="p-7 shadow-lg rounded-[22px] bg-white mx-auto max-w-sm lg:max-w-none h-[225px]">
      {/* Reviewer */}
      <div className="flex items-center gap-3.5 mb-6.5">
        <Image
          src={image}
          height={48}
          width={48}
          alt={`${name} image`}
          className="rounded-full w-12 h-12 object-cover"
        ></Image>
        <div>
          <p className="font-bold text-[#212B36]">{name}</p>
          <p className="text-[#637381] text-sm">{designation}</p>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758762454/quote_o5i0ts.png"
          }
          width={64}
          height={52}
          alt="Quote"
          className="absolute z-0 -left-3 -top-5 opacity-80"
        ></Image>
        <p className="text-[#637381] relative z-10">{message}</p>
      </div>
    </div>
  );
}
