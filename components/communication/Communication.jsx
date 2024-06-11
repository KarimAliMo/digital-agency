import { oswald } from "@/lib/fonts";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";

const Communication = () => {
  return (
    <div
      id="Contact"
      className=" min-h-screen w-full py-8 overflow-hidden flex justify-center items-center"
    >
      <div className=" lg:px-10 2xl:px-52 flex flex-col items-center justify-center gap-14 lg:flex-row 2xl:gap-20">
        <div className=" flex flex-col justify-center items-center lg:items-start">
          <h2
            className={`${oswald.className} uppercase font-bold text-center text-[40px] mb-5 lg:text-start`}
          >
            get in touch
          </h2>
          <form
            action=""
            method="post"
            className=" flex flex-col justify-center items-center gap-4 md:flex-row"
          >
            <div className=" flex flex-col items-center justify-center gap-4 md:gap-9">
              <input
                type="text"
                className=" outline outline-2 outline-slate-500 w-[80vw] p-3 md:w-[40vw] lg:w-[23vw] 2xl:w-[20vw]"
                placeholder="Your Name"
              />
              <input
                type="email"
                name=""
                id=""
                className=" outline outline-2 outline-slate-500 w-[80vw] p-3 md:w-[40vw] lg:w-[23vw] 2xl:w-[20vw]"
                placeholder="Email Address"
              />
              <input
                type="text"
                className=" outline outline-2 outline-slate-500 w-[80vw] p-3 md:w-[40vw] lg:w-[23vw] 2xl:w-[20vw]"
                placeholder="Subject"
              />
            </div>
            <textarea
              name=""
              id=""
              rows="8"
              className=" outline outline-2 outline-slate-500 w-full p-3 md:w-[40vw] lg:w-[23vw] 2xl:w-[20vw]"
              placeholder="Your Message"
            ></textarea>
          </form>
          <button
            type="submit"
            className=" rounded-3xl text-slate-50 capitalize bg-[#554C86] hover:bg-[#f71c52] py-3 w-full mt-8 font-semibold"
          >
            send message
          </button>
        </div>
        <div className="">
          <h2
            className={`${oswald.className} uppercase text-[40px] font-bold text-center mb-5 lg:text-start`}
          >
            our location
          </h2>
          <p className=" text-center text-slate-800 dark:text-slate-200 lg:text-start lg:w-2/3 2xl:w-full">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered .
          </p>
          <div className=" flex flex-col justify-center items-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <MdOutlineLocationOn className=" text-4xl text-[#f71c52] lg:text-5xl" />
            <p className=" text-slate-800 dark:text-slate-200 text-center lg:w-1/3 2xl:w-1/2 lg:text-start">
              123 Park Avenue, New York, United States
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <FiPhoneCall className=" text-4xl text-[#554c86] lg:text-4xl" />
            <div className=" flex justify-center items-center gap-3 lg:justify-start lg:gap-5">
              <p className=" text-slate-800 dark:text-slate-200 text-center lg:text-start">
                +1 631 1234 5678{" "}
              </p>
              <p className=" text-slate-800 dark:text-slate-200 text-center lg:text-start">
                +1 631 1234 5678
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <CiLocationArrow1 className=" text-4xl text-[#39d47a] lg:text-5xl" />
            <p className=" text-slate-800 dark:text-slate-200 text-center lg:text-start">
              email@website.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
