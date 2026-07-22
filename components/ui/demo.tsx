import LogoCloudSwap from "@/components/ui/logo-clouds";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Default() {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 flex flex-col gap-12">
      <LogoCloudSwap />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-white">
            3D Container Scroll Perspective
          </h1>
        }
      >
        <img
          src="images/hustlesmith_denim_hero.png"
          alt="HustleSmith Studio"
          className="w-full h-full object-cover rounded-xl"
        />
      </ContainerScroll>
    </div>
  );
}
