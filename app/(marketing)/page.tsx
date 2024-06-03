import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto w-full flex-1 flex flex-col lg:flex-row p-4 gap-2 items-center justify-center ">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image alt="hero" fill src="/hero-linggo.png" />
      </div>
    </div>
  );
}
