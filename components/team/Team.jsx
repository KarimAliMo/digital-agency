import { oswald } from "@/lib/fonts";
import TeamSlider from "./TeamSlider";
const Team = () => {
  return (
    <div className="h-[120vh] lg:h-[80vh] relative bg-[#F71C52] lg:bg-transparent w-full">
      <div className=" absolute h-full w-full md:w-[90%] lg:w-[90%] top-0 left-0 bg-[#F71C52] dark:bg-[#F71C52]"></div>
      <div className="h-auto lg:h-[80vh] 2xl:px-52 w-full grid grid-cols-1 grid-rows-2 container lg:grid-cols-2 lg:gap-6 lg:grid-rows-1 lg:items-center">
        <div className=" h-fit relative z-30">
          <h2
            className={`${oswald.className} text-white text-[44px] uppercase text-center font-bold lg:text-start lg:text-[60px] lg:font-bold `}
          >
            we have
          </h2>
          <h2
            className={`${oswald.className} text-white text-[44px] uppercase text-center font-bold lg:text-start lg:text-[60px] lg:font-bold `}
          >
            amazing team
          </h2>
          <p className=" text-slate-100 text-center mt-8 lg:text-start ">
            Lorem ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className=" px-8">
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};

export default Team;
