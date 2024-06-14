import { getHeaders } from "@/_actions/headerActions";
import { oswald } from "@/lib/fonts";
const AboutIconsSecond = async () => {
  const { data, errMsg } = await getHeaders();
  console.log(data);
  if (errMsg) {
    return <h2>{errMsg}</h2>;
  }
  return (
    <div className="bg-[#39D47A] flex flex-col items-center justify-center lg:items-start py-20 lg:px-12 md:mx-8 lg:mx-0 lg:relative z-30 lg:h-screen">
      <h2
        className={`${oswald.className} text-white uppercase font-bold text-4xl xl:text-[60px]`}
      >
        we are
      </h2>
      {data &&
        data.map((item) => {
          return (
            <h2
              key={item._id}
              className={`${oswald.className} text-white uppercase font-bold text-4xl xl:text-[60px] xl:mt-4`}
            >
              {item.title}
            </h2>
          );
        })}
      <p className=" text-white text-base mt-10 text-center lg:text-start px-8 lg:px-0">
        Lorem ipsum is simply dummy text of the printing and typesetting. Lorem
        Ipsum has been the industry's standard dummy. Lorem Ipsum has been the
        industry's standard dummy. Lorem ipsum is simply dummy text of the
        printing and typesetting. Lorem Ipsum has been the industry's standard
        dummy. Lorem Ipsum has been the industry's standard dummy.
      </p>
      <p className=" text-white text-base mt-8 text-center lg:text-start px-8 lg:px-0">
        Lorem ipsum is simply dummy text of the printing and typesetting. Lorem
        Ipsum has been the industry's standard dummy. Lorem Ipsum has been the
        industry's standard dummy.
      </p>
      <button
        type="button"
        className=" uppercase border-2 text-sm xl:text-base  border-white px-6 py-2 rounded-md text-white hover:text-black dark:hover:text-black hover:bg-white mt-6"
      >
        learn more
      </button>
    </div>
  );
};

export default AboutIconsSecond;
