import CardSection from "@/components/CardSection";
import ColorCard from "@/components/common/ColorCard";
import TitleSection from "@/components/common/TitleSection";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import WorkSection from "@/components/WorkSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TitleSection>
        <TitleSection.Title>Services</TitleSection.Title>
        <TitleSection.SubTitle className=" max-w-[40rem]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include:
        </TitleSection.SubTitle>
      </TitleSection>
      <CardSection />
      <section className=" container my-24   ">
        <div className="bg-primary-foreground rounded-[45px] px-10 xl:px-16 flex md:gap-10 xl:gap-16">
          <div className="space-y-6 lg:max-w-lg md:py-10 xl:py-16">
            <h3 className="heading-3">Let’s make things happen</h3>
            <p className="text-lg">
              Contact us today to learn more about how our digital marketing services can help your business grow and
              succeed online.
            </p>
            <Button className="p-4 md:p-6 xl:p-8 text-lg rounded-xl">Get your free proposal</Button>
          </div>
          <div className="hidden lg:block">
            <Image src="/Illustration-1.png" className="-my-6" alt="hero" width={380} height={380} />
          </div>
        </div>
      </section>
      {/* Case studies */}
      <TitleSection>
        <TitleSection.Title>Case Studies</TitleSection.Title>
        <TitleSection.SubTitle className="max-w-[40rem]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </TitleSection.SubTitle>
      </TitleSection>
      <section className="container my-8">
        <div className="bg-primary p-6 md:p-10 xl:p-16 flex md:flex-row flex-col gap-6 md:gap-10 xl:gap-16 text-white text-lg rounded-[45px]">
          <div className="">
            <p className="mb-4">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website
              traffic and a 25% increase in sales.
            </p>
            <Link href="#" className="text-secondary text-xl">
              Learn more
              <Image src="/green-arrow.svg" className="ml-2 mb-[2px] inline-block" height={20} width={20} alt="arrow" />
            </Link>
          </div>
          <div className="md:w-[1px] w-full md:h-auto h-[1px] bg-white"></div>
          <div className="">
            <p className="mb-4">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key
              keywords and a 200% increase in organic traffic.
            </p>
            <Link href="#" className="text-secondary text-xl ">
              Learn more
              <Image src="/green-arrow.svg" className="ml-2 mb-[2px] inline-block" height={20} width={20} alt="arrow" />
            </Link>
          </div>
          <div className="md:w-[1px] w-full md:h-auto h-[1px] bg-white"></div>
          <div className="">
            <p className="mb-4">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25%
              and generated a 20% increase in online sales.
            </p>
            <Link href="#" className="text-secondary text-xl ">
              Learn more
              <Image src="/green-arrow.svg" className="ml-2 mb-[2px] inline-block" height={20} width={20} alt="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <TitleSection>
        <TitleSection.Title>Our Working Process </TitleSection.Title>
        <TitleSection.SubTitle>Step-by-Step Guide to Achieving Your Business Goals</TitleSection.SubTitle>
      </TitleSection>
      <WorkSection />
      {/* Team */}
      <TitleSection className="">
        <TitleSection.Title>Team</TitleSection.Title>
        <TitleSection.SubTitle className="max-w-md">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </TitleSection.SubTitle>
      </TitleSection>
      <TeamSection />
      {/* Testimonials */}
      <TitleSection className="">
        <TitleSection.Title>Testimonials</TitleSection.Title>
        <TitleSection.SubTitle className="max-w-md">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </TitleSection.SubTitle>
      </TitleSection>
      <TestimonialSection/>
    </main>
  );
}
