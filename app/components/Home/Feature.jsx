"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Feature({ d }) {
  const { icon, title, description } = d;

  return (
    <motion.div
      className="pr-9 border-r border-[#F4F6F8] last:border-r-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <motion.div
        className="bg-[#ECFCEB] p-2 rounded-lg inline-block"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Image src={icon} width={24} height={24} alt={title} />
      </motion.div>
      <motion.h3
        className="text-[#212B36] text-lg font-bold mt-4 mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-[#637381] text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
