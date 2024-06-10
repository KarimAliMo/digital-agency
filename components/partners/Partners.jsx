"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Brand1 from "@/public/brand4.png";
import Image from "next/image";
const Partners = () => {
  return (
    <div className=" w-full overflow-hidden py-4">
      <div className=" container flex justify-center items-center 2xl:px-20">
        <Carousel
          className=""
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent className=" -ml-5">
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>

            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
            <CarouselItem className=" basis-1/3 lg:basis-1/4 xlbasis-1/6 pl-5">
              <Image src={Brand1} width={150} height={100} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
