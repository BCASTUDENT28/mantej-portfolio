"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-20 pt-10">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-sky-400">
                3D Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src="images/hustlesmith_denim_hero.png"
          alt="HustleSmith Custom Denim Craft"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
