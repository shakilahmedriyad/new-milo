import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-900 w-full py-12  ">
      <ContentLayout>
        <div className="flex gap-5 text-2xl flex-col items-center">
          <Image
            src={"/water.png"}
            className="scale-[1.005] mb-16"
            quality={100}
            priority
            width={500}
            height={500}
            alt="about-us"
          />
          <p className=" text-5xl sm:text-6xl px-5 text-yellow font-semibold mb-5">
            The First Gambling addicted Dog
          </p>
          <p className="text-yellow mb-10 px-5">
            <span className="font-sans">$</span>Milo is all about the
            commmunity, everything is designed to encourage our people to
            actively contribute to the token
            <span className="font-sans">{"'"}</span>s growth
          </p>

          <p className="text-yellow mb-10 px-5">
            Successful meme coins share a common thread a community that
            believes in our potential and collaborates to grow together
          </p>
          <p className="text-yellow mb-10 px-5">
            Are you ready to join Milo on this journey{" "}
            <span className="font-sans">?</span>
          </p>
        </div>
      </ContentLayout>
    </section>
  );
}
