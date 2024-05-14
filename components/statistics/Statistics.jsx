import { oswald } from "@/lib/fonts";
const Statistics = () => {
  return (
    <div className=" py-28">
      <div className=" flex flex-col justify-center items-center gap-6 container 2xl:px-52 ">
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
      </div>
    </div>
  );
};

export default Statistics;
