import { oswald } from "@/lib/fonts";
import CustomersCarousel from "./CustomersCarousel";
const Customers = () => {
  return (
    <div
      id="Clients"
      className=" h-screen flex  lg:justify-end items-center py-8 w-full overflow-hidden"
    >
      <div className=" lg:w-[80vw] bg-[#554C86] lg:h-[80vh] w-full h-full flex justify-center items-center">
        <div className=" container flex flex-col gap-8 lg:flex-row lg:justify-between 2xl:px-12">
          <div className="">
            <h2
              className={`${oswald.className} font-bold text-[44px] lg:text-[60px] text-center lg:text-start uppercase text-white`}
            >
              satisfied
            </h2>
            <h2
              className={`${oswald.className} font-bold text-[44px] lg:text-[60px] text-center lg:text-start mt-2 lg:mt-0 uppercase text-white`}
            >
              customers
            </h2>
            <p className=" text-center lg:text-start text-slate-200 mt-8">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <div className="">
            <CustomersCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
