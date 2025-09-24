import Feature from "./Feature";

export default function Features() {
  const data = [
    {
      icon: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749448/appointment_gio2wi.png",
      title: "Easy Service Booking",
      description:
        "Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      icon: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749448/target_psaaal.png",
      title: "Real-Time Tracking",
      description:
        "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      icon: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/performanceAnalytics_xiuzrl.png",
      title: "Performance Analytics",
      description:
        "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      icon: "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/Secure_bxcbaa.png",
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
  ];
  return (
    <section className="max-w-11/12 lg:max-w-7xl mx-auto grid grid-cols-4 gap-9 mt-20 mb-42.5">
      {data.map((d, i) => (
        <Feature key={i} d={d}></Feature>
      ))}
    </section>
  );
}
