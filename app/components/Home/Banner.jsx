"use client"; // Add this at the top for Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(171, 218, 169, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.98,
  };

  return (
    <motion.section
      className="flex flex-col-reverse lg:flex-row justify-between items-center gap-20 lg:gap-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Flare effect with animation */}
      <motion.div
        className="absolute inset-0 top-10 -left-130 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute w-[600px] h-[600px] bg-[#9DFF99]/40 blur-[90px] rounded-full hidden lg:block"></div>
      </motion.div>

      {/* Details */}
      <motion.div variants={itemVariants}>
        <div className="relative max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749449/grass_iqjwj3.png"
              }
              width={129}
              height={134}
              alt="Grass"
              className="absolute -top-12 right-76"
            />
          </motion.div>

          <motion.h1
            className="text-[84px] font-bold leading-[1.1] relative z-10"
            variants={itemVariants}
          >
            All Your Jobs One Smart App
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            style={{ originX: 0 }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749448/bannerElips_lfvxmn.png"
              }
              width={415}
              height={16.74}
              alt="Banner Title underline"
              className="absolute -bottom-2 right-4 z-0"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-[#637381] max-w-123.75 mt-5"
          variants={itemVariants}
        >
          Built for business owners, employees, and clients streamline job
          scheduling, service tracking, and team management in one powerful app.
        </motion.p>

        {/* App Download Buttons */}
        <motion.div
          className="flex items-center gap-4 mt-16"
          variants={itemVariants}
        >
          {/* Apple Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="rounded-md border border-[#ABDAA9] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer bg-white"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Image
                src="/Apple.png"
                width={22}
                height={27}
                alt="Apple Store Logo"
              />
              <div>
                <p className="text-[9px]">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </motion.div>
          </a>
          {/* Play Store */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="rounded-md border border-[#ABDAA9] px-[14px] py-2.5 flex items-center gap-3 cursor-pointer bg-white"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Image
                src="/Playstore.png"
                width={22}
                height={27}
                alt="Google Play Logo"
              />
              <div>
                <p className="text-[9px]">Download on the</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Side image */}
      <motion.div className="relative" variants={imageVariants}>
        {/* Blur Background Behind Image */}
        <motion.div
          className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
          style={{
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Main Image */}
        <div>
          <Image
            src="https://res.cloudinary.com/ddckuxsjx/image/upload/v1758744393/BannerImage_rjuyq1.png"
            width={720}
            height={656}
            alt="Banner Image"
            className="relative z-10 w-full h-full"
          />
        </div>

        {/* Smooth transition fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
      </motion.div>
    </motion.section>
  );
}
