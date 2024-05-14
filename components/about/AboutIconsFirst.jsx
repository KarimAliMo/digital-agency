import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { oswald } from "@/lib/fonts";

const AboutIconsFirst = () => {
  return (
    <div className="bg-[#554C86] grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center py-20 lg:px-12 lg:gap-8 lg:h-screen">
      <div className=" flex flex-col justify-center items-center gap-8">
        <HiOutlineShoppingBag className=" text-8xl text-white" />
        <p
          className={`${oswald.className} text-center text-white capitalize text-2xl`}
        >
          make business
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8">
        <RiLightbulbFlashLine className=" text-8xl text-white" />
        <p
          className={`${oswald.className} text-center text-white capitalize text-2xl`}
        >
          agency ideas
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8">
        <FaRegHeart className=" text-8xl text-white" />
        <p
          className={`${oswald.className} text-center text-white capitalize text-2xl`}
        >
          our hardwork
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8">
        <IoWalletOutline className=" text-8xl text-white" />
        <p
          className={`${oswald.className} text-center text-white capitalize text-2xl`}
        >
          make money
        </p>
      </div>
    </div>
  );
};

export default AboutIconsFirst;
