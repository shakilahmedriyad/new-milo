import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-900 w-full py-12  ">
      <ContentLayout>
        <div className="flex gap-5 text-2xl flex-col items-center">
          <div className="relative flex flex-col items-center">
            <p className="text-5xl sm:text-6xl px-5 mt-7 text-yellow font-semibold">
              MILO BUST
            </p>
            <Image
              src={"/remove-waterMark.png"}
              className="scale-[1.005] mt-8 mb-16"
              quality={100}
              priority
              width={500}
              height={500}
              alt="about-us"
            />
            <Image
              src={"/milo-head.png"}
              className="w-[37%] z-10 left-[64%] top-[38%] absolute"
              width={500}
              height={500}
              alt="about-us"
            />
          </div>
          <p className="text-yellow mb-10 px-5">
            Introducing Milo Bust: The electrifying Crypto gambling game where
            players place bets, watch a multiplier rise, and cash out to win big
            <span className="text-4xl font-bold"> {" –"}</span> but beware, it
            could Bust at any moment, leaving you with nothing
            <span className="font-sans font-bold"> !</span>
            <br />
            <br />
            All Milo Bust profits will be used to Buy Back and Burn{" "}
            <span className="font-sans font-bold"> $</span>Milo on Sol
          </p>
          <Image
            src={"/water.png"}
            className="scale-[1.005] mb-24"
            quality={100}
            priority
            width={500}
            height={500}
            alt="about-us"
          />
          <p className=" text-5xl sm:text-6xl px-5 text-yellow font-semibold mb-5">
            The First real Gambling Dog
          </p>
        </div>
      </ContentLayout>
    </section>
  );
}
