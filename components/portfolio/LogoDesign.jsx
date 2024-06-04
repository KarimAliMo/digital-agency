"use client";
import Image from "next/image";
import P1 from "@/public/p1.jpg";
import P3 from "@/public/p3.jpg";
import P4 from "@/public/p4.jpg";
import { motion, AnimatePresence } from "framer-motion";

const LogoDesign = () => {
  return (
    <div className=" grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-2 md:grid-rows-1">
      <div className=" mt-8 flex flex-col gap-8">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
          className=" relative w-fit cursor-pointer"
        >
          <div className=" absolute top-[5%] left-[5%] w-[90%] h-[90%] z-20 opacity-0 hover:opacity-100 bg-[#f71c53a4]"></div>
          <Image
            className=" md:w-[500px] md:h-[450px]"
            src={P1}
            width={400}
            height={400}
            alt="p1-pic"
          />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.3 },
          }}
          className=" relative w-fit cursor-pointer"
        >
          <div className=" absolute top-[5%] left-[5%] w-[90%] h-[90%] z-20 opacity-0 hover:opacity-100 bg-[#f71c53a4]"></div>
          <Image
            className=" md:w-[500px] md:h-[450px]"
            src={P3}
            width={400}
            height={400}
            alt="p1-pic"
          />
        </motion.div>
      </div>
      <div className=" flex flex-col gap-8">
        <AnimatePresence>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.2 },
            }}
            exit={{ x: -300, opacity: 0, transition: { duration: 0.4 } }}
            className=" relative w-fit cursor-pointer xl:-mt-[100px]"
          >
            <div className=" absolute top-[5%] left-[5%] w-[90%] h-[90%] z-20 opacity-0 hover:opacity-100 bg-[#f71c53a4]"></div>
            <Image
              className=" md:w-[500px] md:h-[450px]"
              src={P4}
              width={400}
              height={400}
              alt="p1-pic"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LogoDesign;
