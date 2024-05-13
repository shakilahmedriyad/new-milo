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
            Crypto is for everyone, yet many people miss out . Base was designed
            to solve this problem, aspiring to onboard over 1 billion new People
            into the Base<span className="font-sans">/</span>Crypto ecosystem.
            <span className="font-sans">$</span>Milo wants to be part on this
            journey
            <br />
            <br />
            <span className="font-sans">$</span>Milo is all about the
            commmunity, everything is designed to encourage our people to
            actively contribute to the token
            <span className="font-sans">{"'"}</span>s growth
            <br />
            <br />
            Successful meme coins share a common thread a community that
            believes in our potential and collaborates to grow together
            <br />
            <br />
            Are you ready to join Milo on this journey?
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
