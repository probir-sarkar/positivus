import CardSection from "@/components/CardSection";
import ColorCard from "@/components/common/ColorCard";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="flex gap-8 items-center  container my-8">
        <h2 className="heading-2 bg-secondary px-2 leading-tight rounded-lg">Services</h2>
        <p className="text-lg max-w-[40rem]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include:
        </p>
      </section>
      <CardSection />
      <section className=" container my-24   ">
        <div className="bg-primary-foreground rounded-[45px] px-16 flex gap-16">
          <div className="space-y-6 max-w-lg py-16">
            <h3 className="heading-3">Let’s make things happen</h3>
            <p className="text-lg">
              Contact us today to learn more about how our digital marketing services can help your business grow and
              succeed online.
            </p>
            <Button className="p-8 text-lg rounded-xl">Get your free proposal</Button>
          </div>
          <div className="">
            <Image src="/Illustration-1.png" className="-my-6" alt="hero" width={380} height={380} />
          </div>
        </div>
      </section>
      <section className="flex gap-8 items-center  container my-8">
        <h2 className="heading-2 bg-secondary px-2 leading-tight rounded-lg">Case Studies</h2>
        <p className="text-lg max-w-[40rem]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </section>
    </main>
  );
}
