import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/common/ColorAccordian";
import { time } from "console";
const WorkSection = () => {
  return (
    <section className="container my-8">
      {" "}
      <Accordion type="single" defaultValue="Consultation" collapsible className="w-full">
        {/* <AccordionItem value="item-1">
          <AccordionTrigger className="">
            <div className="flex gap-4 items-center">
              <p className="text-6xl">01</p>
              <p className="text-3xl">Consultation</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg">
              During the initial consultation, we will discuss your business goals and objectives, target audience, and
              current marketing efforts. This will allow us to understand your needs and tailor our services to best fit
              your requirements.
            </p>
          </AccordionContent>
        </AccordionItem> */}
        {DATA.map((item, index) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger className="">
              <div className="flex gap-4 items-center">
                <p className="text-6xl">0{index + 1}</p>
                <p className="text-3xl">{item.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default WorkSection;

const DATA = [
  {
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    title: "Research and Strategy Development",
    content:
      "We will conduct a thorough research on your target audience, competitors, and industry trends. We will develop a comprehensive marketing strategy that will help you achieve your goals."
  },
  {
    title: "Implementation",
    content:
      "We will implement the strategy and optimize your marketing efforts to achieve your goals. We will also analyze your performance and identify any opportunities for growth."
  },
  {
    title: "Monitoring and Optimization",
    content:
      "We will monitor your performance and optimize your marketing efforts based on your feedback. We will also evaluate your performance and identify any opportunities for growth."
  },
  {
    title: "Reporting and Communication",
    content:
      "We will report on your progress and share insights with you. We will also provide ongoing support and guidance to help you make data-driven decisions."
  },
  {
    title: "Continual Improvement",
    content:
      "We will continuously improve our services to help you achieve your goals. We will also provide ongoing support and guidance to help you make data-driven decisions."
  }
];
