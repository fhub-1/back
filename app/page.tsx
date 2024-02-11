import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import { Bot } from "lucide-react";
// import me from "@/assets/";

export const metadata: Metadata = {
  title: "Joseph Kitheka - Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16  bg-[url(/blob.svg)] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center">Hi, I&apos;m Joseph👋</H1>
          <p className="text-center font-semibold sm:text-start">
            I&apos;m a full-stack developer from kenya who buidls cool projects
            and makes videos about them on Youtube.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/love.jpg"
            alt="my_profile"
            width={300}
            height={300}
            className="rounded-full aspect-square border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        ask chartbot anything about me.
        <Bot className="inline pb-1 h-8 w-8" />
      </section>
    </section>
  );
}
