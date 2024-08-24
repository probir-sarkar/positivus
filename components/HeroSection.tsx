import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" container pb-8 ">
      <nav className="flex items-center justify-between py-8 ">
        <Image src="/logo.svg" className="object-cover" alt="logo" width={220} height={56} />
        <div className="hidden lg:flex gap-5 xl:gap-10 items-center">
          {["About", "Services", "Blog", "Contact"].map((item) => (
            <Link href="#" className="text-lg" key={item}>
              {item}
            </Link>
          ))}
          <Button variant={"outline"} className="p-4 md:p-6 xl:p-8 text-lg rounded-xl border-2 border-primary">
            Book a consultation
          </Button>
        </div>
      </nav>
      <div className="grid grid-cols-2 gap-10 xl:gap-20 my-8">
        <div className="max-w-lg space-y-6 md:space-y-8 xl:space-y-10">
          <h2 className="heading-1">Navigating the digital landscape for success</h2>
          <p className="text-xl">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including
            SEO, PPC, social media marketing, and content creation.
          </p>
          <Button className="p-4 md:p-6 xl:p-8 text-lg rounded-xl">Book a consultation</Button>
        </div>
        <div className="max-w-xl">
          <Image src="/hero.svg" className="object-cover" alt="hero" width={1500} height={1500} />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8  justify-center lg:justify-between items-center mt-20">
        {BRANDS.map((brand) => (
          <Image src={`/${brand}.svg`} className="  md:h-10 xl:h-12 object-fill" alt="brand" width={125} height={48} key={brand} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

const BRANDS = ["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"];
