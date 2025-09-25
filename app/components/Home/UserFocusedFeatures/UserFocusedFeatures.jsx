import Image from "next/image";

export default function UserFocusedFeatures() {
  const badgeClass =
    "border border-[#3BA334] text-[#3BA334] inline-block px-5 py-[6px] rounded-[60px] font-semibold text-sm";
  const userTitle = "text-[#0F172A] font-bold text-2xl my-4";
  const userFeature = "text-lg text-[#0F172A] font-medium pl-6 border-l-4";

  return (
    <section className="max-w-11/12 lg:max-w-7xl mx-auto mb-42.5 relative">
      {/* Arrows */}
      {/* User Arrow */}
      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759865/arrow-user_dfklm1.png"
        }
        width={221}
        height={124}
        alt="User Arrow"
        className="absolute left-33.75 top-23.5 hidden lg:block"
      ></Image>

      {/* Eployee Arrows */}
      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759865/arrow-busineess_otzzat.png"
        }
        width={341.54}
        height={1253.11}
        alt="Eployee Arrow"
        className="absolute left-85 top-34 z-50 hidden lg:block"
      ></Image>

      {/* Business Owner Arrows */}
      <Image
        src={
          "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759866/arrow-employee_g454cn.png"
        }
        width={308.35}
        height={732.28}
        alt="Eployee Arrow"
        className="absolute -right-4 top-20 z-50 hidden lg:block"
      ></Image>

      <div className="relative">
        <h2 className="text-center text-[#212B36] text-3xl sm:text-4xl lg:text-5xl font-bold z-10 relative">
          Build for Everyone
        </h2>
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/everyoneTitleELip_to3zwi.png"
          }
          width={240}
          height={11.87}
          alt="Banner Title underline"
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:left-185 sm:transform-none w-48 sm:w-auto z-0"
        />
      </div>

      <p className="text-center text-[#637381] text-sm mt-4 max-w-[551px] mx-auto">
        Whether you're booking services, managing tasks, or running operations,
        we've designed the perfect experience for you.
      </p>
      {/* Features*/}
      <div className="mt-23.5 space-y-10">
        {/* For Users */}
        <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center">
          {/* Details */}
          <div className="relative">
            {/* Flare effect */}
            <div className="absolute inset-0 -top-20 -left-60 pointer-events-none">
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </div>

            <p className={badgeClass}>Users</p>
            <h3 className={userTitle}>
              Book services, track progress <br /> and stay updated
            </h3>
            <p className="text-[#637381] text-lg mb-6">
              Easily schedule appointments, get real-time updates, and
              <br />
              enjoy a smooth, transparent service experience.
            </p>

            <p className={`${userFeature} border-[#3BA334] mb-4`}>
              Book services in seconds
            </p>
            <p className={`${userFeature} border-[#3BA334]/70 mb-4`}>
              Track real-time job updates
            </p>
            <p className={`${userFeature} border-[#3BA334]/40 mb-4`}>
              Schedule appointments at your convenience
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Blur Background Behind Image */}
            <div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/phone1_xqjpvm.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            ></Image>

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </div>
        </div>

        {/* For Business Owners */}
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
          {/* Image */}
          <div className="relative">
            {/* Blur Background Behind Image */}
            <div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749446/phone2_sxrws7.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            ></Image>

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </div>

          {/* Details */}
          <div className="relative">
            {/* Flare effect */}
            <div className="absolute -top-20 left-110 inset-0 pointer-events-none hidden 2xl:xl:block">
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </div>
            <p className={badgeClass}>Business Owners</p>
            <h3 className={userTitle}>
              Assign jobs, monitor performance, and
              <br />
              streamline operations.
            </h3>
            <p className="text-[#637381] text-lg mb-6">
              Gain full control of your workforce with real-time tracking,
              <br />
              smart scheduling, and service management in one app.
            </p>

            <p className={`${userFeature} border-[#3BA334] mb-4`}>
              Assign jobs to the right team member
            </p>
            <p className={`${userFeature} border-[#3BA334]/70 mb-4`}>
              Monitor performance in real time
            </p>
            <p className={`${userFeature} border-[#3BA334]/40 mb-4`}>
              Manage clients and services seamlessly
            </p>
          </div>
        </div>

        {/* For Employees */}
        <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center">
          {/* Details */}
          <div className="relative">
            {/* Flare effect */}
            <div className="absolute inset-0 -top-20 -left-60 pointer-events-none">
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </div>

            <p className={badgeClass}>Employees</p>
            <h3 className={userTitle}>
              See tasks, track time, and navigate
              <br />
              routes with ease.
            </h3>
            <p className="text-[#637381] text-lg mb-6">
              Everything you need to manage your workday from job
              <br />
              assignments to optimized routes and time logging.
            </p>

            <p className={`${userFeature} border-[#3BA334] mb-4`}>
              Assign jobs to the right team member
            </p>
            <p className={`${userFeature} border-[#3BA334]/70 mb-4`}>
              Monitor performance in real time
            </p>
            <p className={`${userFeature} border-[#3BA334]/40 mb-4`}>
              Manage clients and services seamlessly
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Blur Background Behind Image */}
            <div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/phone1_xqjpvm.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            ></Image>

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
