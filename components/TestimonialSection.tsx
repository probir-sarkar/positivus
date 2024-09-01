"use client";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";
import "@/components/carousel/carousel.css";

export type Testimonial = {
  testimonial: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    testimonial:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Doe",
    role: "Marketing Director at XYZ Corp"
  },
  {
    testimonial:
      "Positivus has been a game-changer for our digital marketing strategy. Their team's expertise in SEO and content marketing helped us reach new heights in our search rankings. Their data-driven approach and continuous optimization have delivered impressive results. I can't thank them enough for their hard work and dedication.",
    name: "Jane Smith",
    role: "CEO at ABC Enterprises"
  },
  {
    testimonial:
      "Working with Positivus has been a fantastic experience. They took the time to understand our business needs and tailored their services accordingly. The result has been a marked improvement in our online engagement and conversion rates. Their commitment to excellence is evident in everything they do.",
    name: "Michael Johnson",
    role: "Head of Digital Marketing at QRS Solutions"
  },
  {
    testimonial:
      "The team at Positivus is knowledgeable, friendly, and always willing to go the extra mile. Their strategies are innovative and effective, and we've seen a substantial increase in our online visibility since partnering with them. I highly recommend their services to anyone looking to enhance their digital footprint.",
    name: "Emily Davis",
    role: "Brand Manager at LMN Co."
  }
];
const TestimonialSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section className="container my-8 mx-auto py-8 px-1 md:px-0 ">
      <div className="bg-primary md:rounded-[45px] rounded-3xl ">
      <EmblaCarousel slides={testimonials} options={OPTIONS} />
      </div>
    </section>
  );
};

export default TestimonialSection;
