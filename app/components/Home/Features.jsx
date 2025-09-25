"use client";

import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="grid grid-cols-2 lg:grid-cols-4 gap-9 mt-20 mb-42.5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {data.map((d, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Feature d={d} />
        </motion.div>
      ))}
    </motion.section>
  );
}
