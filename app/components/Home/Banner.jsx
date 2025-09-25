import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-20 lg:gap-0">
      {/* Flare effect */}
      <div className="absolute inset-0 top-10 -left-130 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#9DFF99]/40 blur-[90px] rounded-full hidden lg:block"></div>
      </div>
      {/* Details */}
      <div>
        <div className="relative max-w-2xl">
          <Image
            src={
              "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749449/grass_iqjwj3.png"
            }
            width={129}
            height={134}
            alt="Grass"
            className="absolute -top-12 right-76"
          ></Image>
          <h1 className="text-[84px] font-bold leading-[1.1] relative z-10">
            All Your Jobs One Smart App
          </h1>
          <Image
            src={
              "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749448/bannerElips_lfvxmn.png"
            }
            width={415}
            height={16.74}
            alt="Banner Title underline"
            className="absolute -bottom-2 right-20 z-0"
          ></Image>
        </div>
        <p className="text-[#637381] max-w-123.75 mt-5">
          Built for business owners, employees, and clients streamline job
          scheduling, service tracking, and team management in one powerful app.
        </p>

        {/* App Download Buttons */}
        <div className="flex items-center gap-4 mt-16">
          {/* Apple Store */}
          <div className="rounded-md border border-[#ABDAA9] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer">
            <Image
              src="/Apple.png"
              width={22}
              height={27}
              alt="Apple Store Logo"
            ></Image>
            <div>
              <p className="text-[9px]">Download on the</p>
              <p className="text-lg font-semibold">App Store</p>
            </div>
          </div>
          {/* Play Store */}
          <div className="rounded-md border border-[#ABDAA9] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer">
            <Image
              src="/Playstore.png"
              width={22}
              height={27}
              alt="Apple Store Logo"
            ></Image>
            <div>
              <p className="text-[9px]">Download on the</p>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>
      {/* Side image */}
      <div className="relative">
        {/* Blur Background Behind Image */}
        <div
          className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>

        {/* Main Image */}
        <Image
          src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758744393/BannerImage_rjuyq1.png"
          width={720}
          height={656}
          alt="Banner Image"
          className="relative z-10 w-full h-full"
        />

        {/* Smooth transition fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
      </div>
    </section>
  );
}
