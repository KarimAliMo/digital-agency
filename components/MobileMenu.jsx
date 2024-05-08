"use client";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/public/4834111_25259462.png";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import SocialIconsMobile from "./SocialIconsMobile";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className=" ">
      <FaBarsStaggered
        onClick={() => setOpenMenu(true)}
        className=" hover:text-rose-400 dark:text-white hover:dark:text-rose-400 cursor-pointer"
      />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            exit={{ opacity: 0, x: "100%", transition: { duration: 0.5 } }}
            className=" fixed right-0 top-0 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 min-h-screen bg-rose-600 flex flex-col z-50 py-8 px-8"
          >
            <div className=" flex justify-end">
              <IoClose
                className=" text-3xl cursor-pointer text-white"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <div className=" flex justify-center mb-8">
              <Image width={150} height={150} src={LogoWhite} alt="logo" />
            </div>
            <div className=" grid grid-cols-2">
              <div className=" flex flex-col gap-5">
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  home
                </Link>
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  about
                </Link>
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  portfolio
                </Link>
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  clients
                </Link>
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  blog
                </Link>
                <Link
                  href="#"
                  className=" uppercase text-lg font-bold text-white hover:text-slate-200 dark:hover:text-slate-200 justify-start"
                >
                  contact
                </Link>
              </div>
              <div className=" flex flex-col gap-8 justify-start">
                <div className=" flex flex-col gap-5 justify-start">
                  <div className=" flex gap-1 items-center">
                    <MdOutlinePhone className=" h-4 w-4 text-white" />

                    <p className=" cursor-pointer text-sm text-white">
                      + 1 631 123 4567
                    </p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <FaRegEnvelope className=" w-4 h-4 text-white" />

                    <p className=" cursor-pointer text-sm text-white">
                      email@website.com
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col justify-start">
                  <SocialIconsMobile />
                </div>
                <p className=" text-white">
                  © 2024 MegaOne. Made With Love by Karim Mo
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
