import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import ToggleMode from "./ToggleMode";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import LogoColored from "@/public/4834111_25259461.png";

const Nav = () => {
  return (
    <div>
      <div className=" h-4 flex w-full">
        <span className=" w-1/3 h-4 bg-[#F71C52]"></span>
        <span className=" w-1/3 h-4 bg-[#554C86]"></span>
        <span className=" w-1/3 h-4 bg-[#39D47A]"></span>
      </div>
      <div className=" flex justify-between container 2xl:px-52 py-12">
        <div className=" relative flex items-center lg:hidden w-full h-full">
          <Image
            src={LogoColored}
            width={200}
            height={200}
            className=" absolute z-40 aspect-square -left-10 -top-6"
            alt="Logo"
          />
        </div>
        <div className=" hidden lg:flex gap-4 items-center">
          <div className=" flex gap-1 items-center">
            <MdOutlinePhone className=" h-4 w-4 text-rose-400" />

            <p className=" cursor-pointer text-sm text-slate-950 dark:text-slate-100 hover:text-green-300 dark:hover:text-green-300">
              + 1 631 123 4567
            </p>
          </div>
          <div className=" flex gap-1 items-center">
            <FaRegEnvelope className=" w-4 h-4 text-rose-400" />

            <p className=" cursor-pointer text-sm text-slate-950 dark:text-slate-100 hover:text-green-300 dark:hover:text-green-300">
              email@website.com
            </p>
          </div>
        </div>
        <div className=" flex justify-end gap-16">
          <SocialIcons />
          <div className=" flex items-center gap-8">
            <ToggleMode />
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
