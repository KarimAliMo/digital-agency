"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
const SocialIconsMobile = () => {
  return (
    <div className=" flex gap-4 items-start">
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-white"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaFacebookF className=" h-5 w-5 text-white hover:text-blue-800" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-white"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaTwitter className=" h-5 w-5 text-white hover:text-blue-400" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-white"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaLinkedinIn className=" h-5 w-5 text-white hover:text-blue-500" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-white"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaInstagram className=" h-5 w-5 text-white hover:text-indigo-500" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialIconsMobile;
