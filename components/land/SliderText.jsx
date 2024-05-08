"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import sliderText from "@/lib/smallData";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { oswald } from "@/lib/fonts";
import { inter } from "@/lib/fonts";
const SliderText = () => {
  const [infoLand, setInfoLand] = useState(sliderText);
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      orientation="horizontal"
      className={`${oswald.className} min-h-[40vh] lg:h-[50vh]`}
    >
      <CarouselContent>
        {infoLand &&
          infoLand.map((_, index) => {
            return (
              <CarouselItem key={index}>
                <div className=" flex flex-col items-center lg:items-start">
                  <h1 className=" uppercase text-white text-[40px] md:text-[50px] lg:text-6xl xl:text-7xl font-bold text-center lg:text-start lg:mb-4">
                    {_.title1}
                  </h1>
                </div>
                <div className=" flex flex-col items-center lg:items-start">
                  <h1 className=" uppercase text-white text-[40px] md:text-[50px] lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-6 lg:text-start">
                    {_.title2}
                  </h1>
                  <p
                    className={`${inter.className} text-white text-center leading-relaxed lg:text-start`}
                  >
                    {_.text1}
                  </p>
                  <button
                    type="button"
                    className={`${inter.className} uppercase border-2 text-sm xl:text-base  border-white px-6 py-2 rounded-md text-white hover:text-black dark:hover:text-black hover:bg-white mt-6`}
                  >
                    learn more
                  </button>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
    </Carousel>
  );
};

export default SliderText;
