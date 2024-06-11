import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className=" h-4 flex w-full">
        <span className=" w-1/3 h-4 bg-[#F71C52]"></span>
        <span className=" w-1/3 h-4 bg-[#554C86]"></span>
        <span className=" w-1/3 h-4 bg-[#39D47A]"></span>
      </div>
      <div className=" container 2xl:px-52 flex flex-col justify-center items-center py-16 lg:flex-row lg:justify-between">
        <div className=" flex justify-center items-center gap-3">
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaFacebookF className=" text-xl hover:text-white" />
          </div>
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaTwitter className=" text-xl hover:text-white" />
          </div>
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaGooglePlusG className=" text-[24px] hover:text-white" />
          </div>
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaLinkedinIn className=" text-xl hover:text-white" />
          </div>
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaInstagram className=" text-xl hover:text-white" />
          </div>
          <div className=" w-fit h-fit p-4 rounded-full hover:bg-[#F71C52] cursor-pointer">
            <FaPinterestP className=" text-xl hover:text-white" />
          </div>
        </div>
        <p className=" text-slate-700 dark:text-slate-200">
          © 2024 MegaOne. Coded By Karim
        </p>
      </div>
    </div>
  );
};

export default Footer;
