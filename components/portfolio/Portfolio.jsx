"use client";
import { oswald } from "@/lib/fonts";
import All from "./All";
import { useState } from "react";
import WebDesign from "./WebDesign";
import LogoDesign from "./LogoDesign";
import MobileApp from "./MobileApp";
import Development from "./Development";
const Portfolio = () => {
  const [allPic, setAllPic] = useState(true);
  const [webDes, setWebDes] = useState(false);
  const [logoDes, setLogoDes] = useState(false);
  const [mopApp, setMopApp] = useState(false);
  const [devPic, setDevPic] = useState(false);
  return (
    <div className=" min-h-screen w-full py-32 overflow-hidden">
      <div className=" container 2xl:px-52 grid grid-cols-1 ">
        <div className="">
          <p
            className={`${oswald.className} text-center text-4xl uppercase font-bold xl:text-[50px] xl:text-start`}
          >
            our
          </p>
          <p
            className={`${oswald.className} text-center text-4xl uppercase font-bold xl:text-[50px] xl:text-start xl:mt-3`}
          >
            amazing portfolio
          </p>
          <div className=" flex justify-center items-center gap-4 flex-wrap mt-8 xl:justify-start">
            <div
              onClick={() => {
                setAllPic(true);
                setDevPic(false);
                setLogoDes(false);
                setMopApp(false);
                setWebDes(false);
              }}
              className=" uppercase text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              all
            </div>
            <div
              onClick={() => {
                setAllPic(false);
                setDevPic(false);
                setLogoDes(false);
                setMopApp(false);
                setWebDes(true);
              }}
              className=" uppercase text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              web design
            </div>
            <div
              onClick={() => {
                setAllPic(false);
                setDevPic(false);
                setLogoDes(true);
                setMopApp(false);
                setWebDes(false);
              }}
              className=" uppercase text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              logo design
            </div>
            <div
              onClick={() => {
                setAllPic(false);
                setDevPic(false);
                setLogoDes(false);
                setMopApp(true);
                setWebDes(false);
              }}
              className=" uppercase text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              mobile app
            </div>
            <div
              onClick={() => {
                setAllPic(false);
                setDevPic(true);
                setLogoDes(false);
                setMopApp(false);
                setWebDes(false);
              }}
              className=" uppercase text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              development
            </div>
          </div>
        </div>
        {allPic && <All />}
        {webDes && <WebDesign />}
        {logoDes && <LogoDesign />}
        {mopApp && <MobileApp />}
        {devPic && <Development />}
      </div>
    </div>
  );
};

export default Portfolio;
