"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import Customer1 from "@/public/2d3b6574957b8dae5988deb8b4342bb0.jpg";
import Customer2 from "@/public/2e2d95037b91cfb4431244a974c7331d.jpg";
import Customer3 from "@/public/7ff6f90b349d798e070defb6afd42ebb.jpg";
const CustomersCarousel = () => {
  return (
    <Carousel
      className=""
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className=" lg:py-4">
        <CarouselItem>
          <div className=" flex flex-col justify-center items-center gap-3">
            <p className=" text-slate-200 text-center w-[90%] lg:w-[95%] 2xl:w-[80%] 2xl:text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy.Lorem ipsum is
              simply dummy text of the printing and typesetting. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <div className=" mt-2 flex flex-col items-center justify-center gap-2">
              <Image
                src={Customer1}
                className=" rounded-full lg:w-28 lg:h-28"
                width={70}
                height={70}
              />
              <p className=" uppercase text-slate-100 text-lg text-center font-semibold">
                jone doe
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" flex flex-col justify-center items-center gap-3">
            <p className=" text-slate-200 text-center w-[90%] lg:w-[95%] 2xl:w-[80%] 2xl:text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy.Lorem ipsum is
              simply dummy text of the printing and typesetting. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <div className=" mt-2 flex flex-col items-center justify-center gap-2">
              <Image
                src={Customer2}
                className=" rounded-full lg:w-28 lg:h-28"
                width={70}
                height={70}
              />
              <p className=" uppercase text-slate-100 text-lg text-center font-semibold">
                jone doe
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" flex flex-col justify-center items-center gap-3">
            <p className=" text-slate-200 text-center w-[90%] lg:w-[95%] 2xl:w-[80%] 2xl:text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy.Lorem ipsum is
              simply dummy text of the printing and typesetting. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <div className=" mt-2 flex flex-col items-center justify-center gap-2">
              <Image
                src={Customer3}
                className=" rounded-full lg:w-28 lg:h-28"
                width={70}
                height={70}
              />
              <p className=" uppercase text-slate-100 text-lg text-center font-semibold">
                jone doe
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CustomersCarousel;
