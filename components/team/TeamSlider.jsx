"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { teamSlides } from "@/lib/smallData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const TeamSlider = () => {
  const [teamInfo, setTeamInfo] = useState(teamSlides);

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          {teamInfo &&
            teamInfo.map((item, index) => {
              return (
                <CarouselItem key={index} className=" md:basis-1/2">
                  <div className=" flex flex-col items-center">
                    <div id={index} className=" relative">
                      <Image
                        className=" lg:w-[250px] lg:h-[250px]"
                        src={item.pic}
                        width={320}
                        height={350}
                      />

                      <div
                        key={index}
                        className=" absolute top-[5%] left-[5%] w-[90%] h-[90%] flex justify-center items-center bg-[#f71c5280] opacity-0 hover:opacity-100 "
                      >
                        <div className=" rounded-full p-3 hover:bg-white cursor-pointer">
                          <FaFacebookF className=" text-white hover:text-blue-600" />
                        </div>
                        <div className=" rounded-full p-3 hover:bg-white cursor-pointer">
                          <FaTwitter className=" text-white hover:text-blue-400" />
                        </div>
                        <div className=" rounded-full p-3 hover:bg-white cursor-pointer">
                          <FaInstagram className=" text-white hover:text-purple-400" />
                        </div>
                        <div className=" rounded-full p-3 hover:bg-white cursor-pointer">
                          <FaPinterestP className=" text-white hover:text-rose-400" />
                        </div>
                      </div>
                    </div>
                    <p className=" text-[22px] capitalize text-white font-semibold mt-6">
                      {item.name}
                    </p>
                    <p className=" capitalize text-white mt-2">{item.job}</p>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TeamSlider;
