"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
const SocialIcons = () => {
  return (
    <div className=" hidden  md:flex gap-4 items-center">
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-blue-800"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaFacebookF className=" h-5 w-5 text-slate-900 dark:text-white hover:text-white" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-blue-400"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaTwitter className=" h-5 w-5 text-slate-900 dark:text-white hover:text-white" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-blue-500"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaLinkedinIn className=" h-5 w-5 text-slate-900 dark:text-white hover:text-white" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 0 }}
        whileHover={{ borderRadius: "100%", transition: { duration: 1 } }}
        className=" w-auto h-auto hover:bg-gradient-to-t from-orange-500 via-red-400 to-indigo-500"
      >
        <Link href="#" className=" h-8 w-8 flex items-center justify-center">
          <FaInstagram className=" h-5 w-5 text-slate-900 dark:text-white hover:text-white" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialIcons;
