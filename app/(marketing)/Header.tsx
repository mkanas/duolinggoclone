import React from "react";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;
  const signInRedirectUrl =
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
  const signUpRedirectUrl =
    process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
        {" "}
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={"/logolinggo.png"} alt="logo" width={100} height={100} />{" "}
          <h1 className="font-extrabold text-2xl text-green-600 tracking-wide ">
            Linggo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl={signInRedirectUrl}
              afterSignUpUrl={signUpRedirectUrl}
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
