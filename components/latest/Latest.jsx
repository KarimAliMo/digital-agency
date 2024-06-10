import { oswald } from "@/lib/fonts";
import Image from "next/image";
import Blog1 from "@/public/blog1.png";
const Latest = () => {
  return (
    <div className=" h-screen flex justify-start items-center w-full overflow-hidden lg:relative">
      <div className=" lg:w-[80vw] 2xl:w-[70vw] lg:h-[80vh] w-full h-full flex justify-center items-center bg-[#39D47A]">
        <div className=" container 2xl:px-52">
          <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h2
              className={`${oswald.className} uppercase text-white font-bold text-[44px] text-center lg:text-start lg:text-[66px]`}
            >
              latest
            </h2>
            <h2
              className={`${oswald.className} uppercase text-white font-bold text-[44px] text-center lg:text-start lg:text-[66px]`}
            >
              design blog
            </h2>
            <p className=" text-slate-100 text-center lg:text-start mt-6 lg:w-3/5 2xl:w-4/5">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy.
            </p>
            <button
              type="button"
              className=" cursor-pointer text-slate-50 hover:text-slate-800 uppercase mt-3 py-3 px-6 rounded-3xl bg-transparent border border-slate-50 hover:bg-slate-50"
            >
              learn more
            </button>
          </div>
          <div className=" flex justify-center items-center mt-5 lg:mt-0 lg:w-auto lg:h-auto lg:absolute lg:top-1/2 lg:right-[10%] lg:translate-x-[10%] lg:-translate-y-1/2 2xl:right-[15%]">
            <Image
              src={Blog1}
              width={400}
              height={400}
              className=" lg:w-[500px] lg:h-[400px] 2xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
