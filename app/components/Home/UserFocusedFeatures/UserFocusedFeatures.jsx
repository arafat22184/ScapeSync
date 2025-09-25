"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UserFocusedFeatures() {
  const badgeClass =
    "border border-[#3BA334] text-[#3BA334] inline-block px-5 py-[6px] rounded-[60px] font-semibold text-sm";
  const userTitle = "text-[#0F172A] font-bold text-2xl my-4";
  const userFeature = "text-lg text-[#0F172A] font-medium pl-6 border-l-4";

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const leftImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="mb-42.5 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      {/* Arrows */}
      {/* User Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759865/arrow-user_dfklm1.png"
          }
          width={221}
          height={124}
          alt="User Arrow"
          className="absolute left-33.75 top-23.5 hidden lg:block"
        />
      </motion.div>

      {/* Employee Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759865/arrow-busineess_otzzat.png"
          }
          width={341.54}
          height={1253.11}
          alt="Employee Arrow"
          className="absolute left-85 top-34 z-50 hidden lg:block"
        />
      </motion.div>

      {/* Business Owner Arrows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Image
          src={
            "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758759866/arrow-employee_g454cn.png"
          }
          width={308.35}
          height={732.28}
          alt="Employee Arrow"
          className="absolute -right-4 top-20 z-50 hidden lg:block"
        />
      </motion.div>

      <motion.div className="relative" variants={itemVariants}>
        <h2 className="text-center text-[#212B36] text-3xl sm:text-4xl lg:text-5xl font-bold z-10 relative">
          Build for Everyone
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ originX: 0 }}
        >
          <Image
            src={
              "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/everyoneTitleELip_to3zwi.png"
            }
            width={240}
            height={11.87}
            alt="Banner Title underline"
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:left-185 sm:transform-none w-48 sm:w-auto z-0"
          />
        </motion.div>
      </motion.div>

      <motion.p
        className="text-center text-[#637381] text-sm mt-4 max-w-[551px] mx-auto"
        variants={itemVariants}
      >
        Whether you're booking services, managing tasks, or running operations,
        we've designed the perfect experience for you.
      </motion.p>

      {/* Features*/}
      <div className="mt-23.5 space-y-10">
        {/* For Users */}
        <motion.div
          className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center"
          variants={itemVariants}
        >
          {/* Details */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Flare effect */}
            <motion.div
              className="absolute inset-0 -top-20 -left-60 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </motion.div>

            <motion.p
              className={badgeClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Users
            </motion.p>
            <motion.h3
              className={userTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Book services, track progress <br /> and stay updated
            </motion.h3>
            <motion.p
              className="text-[#637381] text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Easily schedule appointments, get real-time updates, and
              <br />
              enjoy a smooth, transparent service experience.
            </motion.p>

            <motion.p
              className={`${userFeature} border-[#3BA334] mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Book services in seconds
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/70 mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Track real-time job updates
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/40 mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Schedule appointments at your convenience
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" variants={imageVariants}>
            {/* Blur Background Behind Image */}
            <motion.div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/phone1_xqjpvm.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            />

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </motion.div>
        </motion.div>

        {/* For Business Owners */}
        <motion.div
          className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center"
          variants={itemVariants}
        >
          {/* Image */}
          <motion.div className="relative" variants={leftImageVariants}>
            {/* Blur Background Behind Image */}
            <motion.div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749446/phone2_sxrws7.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            />

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </motion.div>

          {/* Details */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Flare effect */}
            <motion.div
              className="absolute -top-20 left-110 inset-0 pointer-events-none hidden 2xl:xl:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </motion.div>

            <motion.p
              className={badgeClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Business Owners
            </motion.p>
            <motion.h3
              className={userTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Assign jobs, monitor performance, and
              <br className="hidden lg:block" />
              streamline operations.
            </motion.h3>
            <motion.p
              className="text-[#637381] text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Gain full control of your workforce with real-time tracking,
              <br />
              smart scheduling, and service management in one app.
            </motion.p>

            <motion.p
              className={`${userFeature} border-[#3BA334] mb-4`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Assign jobs to the right team member
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/70 mb-4`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Monitor performance in real time
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/40 mb-4`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Manage clients and services seamlessly
            </motion.p>
          </motion.div>
        </motion.div>

        {/* For Employees */}
        <motion.div
          className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center"
          variants={itemVariants}
        >
          {/* Details */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Flare effect */}
            <motion.div
              className="absolute inset-0 -top-20 -left-60 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-[300px] h-[300px] bg-[#9DFF99]/20 blur-[90px] rounded-full hidden lg:block"></div>
            </motion.div>

            <motion.p
              className={badgeClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Employees
            </motion.p>
            <motion.h3
              className={userTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              See tasks, track time, and navigate
              <br />
              routes with ease.
            </motion.h3>
            <motion.p
              className="text-[#637381] text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Everything you need to manage your workday from job
              <br />
              assignments to optimized routes and time logging.
            </motion.p>

            <motion.p
              className={`${userFeature} border-[#3BA334] mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Assign jobs to the right team member
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/70 mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Monitor performance in real time
            </motion.p>
            <motion.p
              className={`${userFeature} border-[#3BA334]/40 mb-4`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Manage clients and services seamlessly
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" variants={imageVariants}>
            {/* Blur Background Behind Image */}
            <motion.div
              className="absolute inset-0 bg-[#9DFF99]/15 blur-[90px] rounded-full z-0"
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <Image
              src={
                "https://res.cloudinary.com/ddckuxsjx/image/upload/v1758749447/phone1_xqjpvm.png"
              }
              width={610}
              height={516}
              alt="user app"
              className="relative z-10 w-full h-full"
            />

            {/* Smooth transition fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white to-transparent z-20"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
