"use client";
import { motion } from "framer-motion";
import { oswald } from "@/lib/fonts";
const Statistics = () => {
  return (
    <div className=" py-28">
      <div className=" flex flex-col justify-center items-center gap-6 w-full container 2xl:px-52 ">
        <p className=" text-rose-500 text-center font-semibold ">
          Lorem ipsum is simply dummy text
        </p>
        <h2
          className={`${oswald.className} text-center font-bold dark:text-white text-[44px] uppercase`}
        >
          {" "}
          agency stats &amp; facts
        </h2>
        <p className=" text-slate-400 dark:text-slate-200 text-center">
          Lorem ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has
          been the industry's standard dummy. Lorem ipsum is simply dummy text
          of the printing and typesetting.
        </p>
        <div className=" grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-8 overflow-hidden mt-10">
          <div className="  flex flex-col gap-4 justify-center items-center">
            <div className=" relative w-fit h-fit">
              <svg className="" width="200" height="200">
                <motion.circle
                  initial={{ strokeDashoffset: 100 }}
                  whileInView={{
                    strokeDashoffset: 900,
                    transition: { duration: 1.5 },
                  }}
                  cx="100"
                  cy="100"
                  r="90"
                  strokeDasharray="500"
                  strokeDashoffset="900"
                  strokeLinecap="round"
                  className=" fill-transparent stroke-rose-600 stroke-[15px]"
                ></motion.circle>
              </svg>
              <p
                className={`${oswald.className} absolute top-0 left-0 h-full w-full flex justify-center items-center text-5xl font-semibold text-slate-800 dark:text-slate-300`}
              >
                90%
              </p>
            </div>
            <p className=" uppercase text-center text-base lg:text-2xl font-semibold text-slate-600 dark:text-slate-300 ">
              increase in sale
            </p>
          </div>
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className=" relative w-fit h-fit">
              <svg className="" width="200" height="200">
                <motion.circle
                  initial={{ strokeDashoffset: 100 }}
                  whileInView={{
                    strokeDashoffset: 800,
                    transition: { duration: 1.5 },
                  }}
                  cx="100"
                  cy="100"
                  r="90"
                  strokeDasharray="500"
                  strokeDashoffset="900"
                  strokeLinecap="round"
                  className=" fill-transparent stroke-red-600 stroke-[15px]"
                ></motion.circle>
              </svg>
              <p
                className={`${oswald.className} absolute top-0 left-0 h-full w-full flex justify-center items-center text-5xl font-semibold text-slate-800 dark:text-slate-300`}
              >
                75%
              </p>
            </div>
            <p className=" uppercase text-center text-base lg:text-2xl font-semibold text-slate-600 dark:text-slate-300 ">
              recommendation rate
            </p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center">
            <div className=" relative w-fit h-fit">
              <svg className="" width="200" height="200">
                <motion.circle
                  initial={{ strokeDashoffset: 100 }}
                  whileInView={{
                    strokeDashoffset: 1000,
                    transition: { duration: 1.5 },
                  }}
                  cx="100"
                  cy="100"
                  r="90"
                  strokeDasharray="500"
                  strokeDashoffset="1000"
                  strokeLinecap="round"
                  className=" fill-transparent stroke-blue-600 stroke-[15px]"
                ></motion.circle>
              </svg>
              <p
                className={`${oswald.className} absolute top-0 left-0 h-full w-full flex justify-center items-center text-5xl font-semibold text-slate-800 dark:text-slate-300`}
              >
                95%
              </p>
            </div>
            <p className=" uppercase text-center text-base lg:text-[19px] font-semibold text-slate-600 dark:text-slate-300 ">
              new ventures we become part of
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
