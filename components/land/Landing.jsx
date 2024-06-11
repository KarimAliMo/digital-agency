import AdvSlider from "./AdvSlider";
import SliderText from "./SliderText";

const Landing = () => {
  return (
    <div id="Home" className=" h-screen lg:h-[80vh] relative">
      <div className=" absolute h-full w-full md:w-[90%] lg:w-4/5 top-0 left-0 bg-[#F71C52] dark:bg-[#F71C52]"></div>
      <div className=" h-screen lg:h-[80vh] 2xl:px-52 w-full container pt-10 lg:py-0 grid justify-center items-center  grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 ">
        <SliderText />
        <AdvSlider />
      </div>
    </div>
  );
};

export default Landing;
