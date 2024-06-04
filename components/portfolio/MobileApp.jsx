"use client";
import Image from "next/image";
import P1 from "@/public/p1.jpg";
import P2 from "@/public/p2.jpg";
import { motion } from "framer-motion";

const MobileApp = () => {
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
      </div>
      <div className=" flex flex-col gap-8">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.3 },
          }}
          className=" relative w-fit cursor-pointer xl:-mt-[100px]"
        >
          <div className=" absolute top-[5%] left-[5%] w-[90%] h-[90%] z-20 opacity-0 hover:opacity-100 bg-[#f71c53a4]"></div>
          <Image
            className=" md:w-[500px] md:h-[450px]"
            src={P2}
            width={400}
            height={400}
            alt="p1-pic"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileApp;
