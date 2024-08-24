import Image from "next/image";
import ColorCard from "./common/ColorCard";

const TeamSection = () => {
  return (
    <section className="container my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-8">
      {team.map((item, index) => (
        <ColorCard key={index} className="block md:p-6 xl:p-8">
          <div className="flex gap-4 w-full border-b border-black pb-6">
            <Image src={`/team/${item.image}`} className="object-contain" alt="hero" width={105} height={105} />
            <div className="flex flex-col justify-end relative w-full">
              <Image className="absolute right-0 top-0" src="/linkedIn.svg" height={35} width={35} alt="linkedin" />
              <h4 className="heading-4">{item.name}</h4>
              <p className="text-lg">{item.position}</p>
            </div>
          </div>
          <p className="text-lg pt-6">{item.description}</p>
        </ColorCard>
      ))}
    </section>
  );
};

export default TeamSection;

const team = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    image: "John_Smith.png",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy."
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    image: "Jane_Doe.png",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills."
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    image: "Michael_Brown.png",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization."
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    image: "Emily_Johnson.png",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis."
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    image: "Brian_Williams.png",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement."
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    image: "Sarah_Kim.png",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries."
  }
];
