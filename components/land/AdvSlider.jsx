"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Slide1 from "@/public/slide1.jpg";
import Slide2 from "@/public/slide2.jpg";
import Slide3 from "@/public/slide3.jpg";
import Autoplay from "embla-carousel-autoplay";
const AdvSlider = () => {
  return (
    <Carousel
      orientation="vertical"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="  h-[40vh] lg:h-[50vh] md:mt-8 lg:mt-0"
    >
      <CarouselContent className=" h-[40vh] lg:h-[50vh]">
        <CarouselItem className=" cursor-pointer">
          <Image src={Slide1} className=" w-full" alt="slide" />
        </CarouselItem>
        <CarouselItem className=" cursor-pointer">
          <Image src={Slide2} className=" w-full" alt="slide" />
        </CarouselItem>
        <CarouselItem className=" cursor-pointer">
          <Image src={Slide3} className=" w-full" alt="slide" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" hidden " />
      <CarouselNext className=" hidden " />
    </Carousel>
  );
};

export default AdvSlider;
