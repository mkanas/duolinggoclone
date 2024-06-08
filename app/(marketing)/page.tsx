import Image from "next/image";
import { ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto w-full flex-1 flex flex-col lg:flex-row p-4 gap-2 items-center justify-center ">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image alt="hero" fill src="/hero-linggo.png" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
       <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
       Learn, Practice, and master new languange with linggo
        </h1> 
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </ClerkLoading>
      </div>
    </div>
  );
}
