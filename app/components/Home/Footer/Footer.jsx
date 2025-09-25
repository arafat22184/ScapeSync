import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialIcons = [
    {
      name: "youtube",
      img: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749443/Youtube_kdhemi.png",
      link: "https://youtube.com/",
    },
    {
      name: "X",
      img: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749443/X_giqr5m.png",
      link: "https://x.com/",
    },
    {
      name: "Facebook",
      img: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749442/Facebook_hkyzoy.png",
      link: "https://facebook.com/",
    },
    {
      name: "Instagram",
      img: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749443/Insta_o6pql3.png",
      link: "https://www.instagram.com/",
    },
  ];
  return (
    <footer className="bg-[#0F3B34] px-4 xl:px-0 relative">
      <div className="max-w-7xl mx-auto pt-14 pb-6 lg:pt-[101px] lg:pb-[34px] relative z-50">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-[74px]">
          <Link href={"/"}>
            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758740455/ScapeSync-Logo_pncngb.png"
              }
              width={207}
              height={76}
              alt="ScapeSync Logo"
            ></Image>
          </Link>

          <h6 className="font-medium text-[#CFD8D6] flex-1">
            Your all-in-one platform for job scheduling, employee management,
            and client service built to keep your business running smoothly from
            anywhere.
          </h6>

          {/* App Download Buttons */}
          <div className="flex items-center gap-4 text-white xl:ml-[53px]">
            {/* Apple Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md border border-[#347C30] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[#174e44] hover:scale-105 hover:shadow-lg">
                <Image
                  src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749443/Foot-Apple_cig1ss.png"
                  width={22}
                  height={27}
                  alt="Apple Store Logo"
                ></Image>
                <div>
                  <p className="text-[9px]">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </div>
            </a>
            {/* Play Store */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md border border-[#347C30] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[#174e44] hover:scale-105 hover:shadow-lg">
                <Image
                  src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749443/Foot-PlayStore_g4a7pb.png"
                  width={22}
                  height={27}
                  alt="Apple Store Logo"
                ></Image>
                <div>
                  <p className="text-[9px]">Download on the</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center mt-[91px] gap-8">
          {socialIcons.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125 hover:brightness-110"
            >
              <Image
                src={social.img}
                width={24}
                height={24}
                alt={social.name}
              />
            </a>
          ))}
        </div>
      </div>

      <hr className="text-[#3f615d] w-full relative z-50" />
      <p className="max-w-7xl mx-auto text-[#42645E] text-sm py-[11px] relative z-50">
        &copy; 2021-{new Date().getFullYear()}, ScapeSync. All Rights Reserved.
      </p>

      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749444/Foot-Top_rj2gn9.png"
        }
        width={307}
        height={386}
        alt="footer elips1"
        className="absolute top-0 right-0 z-0 opacity-25"
      ></Image>

      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749444/foot-Bottom_miubfd.png"
        }
        width={357}
        height={396}
        alt="footer elips3"
        className="absolute bottom-0 right-50 z-0 opacity-25"
      ></Image>

      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749444/Foot-Right_z59sia.png"
        }
        width={140}
        height={145}
        alt="footer elips2"
        className="absolute bottom-0 right-0 z-0 opacity-25"
      ></Image>
    </footer>
  );
}
