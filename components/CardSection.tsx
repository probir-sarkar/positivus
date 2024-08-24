import ColorCard from "@/components/common/ColorCard";
import Image from "next/image";

const CardSection = () => {
  return (
    <section className="container my-8 grid md:grid-cols-2 gap-8">
      <ColorCard className="bg-primary-foreground">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-secondary ">Search engine</ColorCard.Title>
            <ColorCard.Title className="bg-secondary">optimization</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow-dark.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-1.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
      <ColorCard className="bg-secondary">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-white ">Pay-per-click</ColorCard.Title>
            <ColorCard.Title className="bg-white">advertising</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow-dark.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-2.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
      <ColorCard className="bg-primary">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-white ">Social Media</ColorCard.Title>
            <ColorCard.Title className="bg-white">Marketing</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl text-white">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-3.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
      <ColorCard className="bg-primary-foreground">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-secondary ">Email</ColorCard.Title>
            <ColorCard.Title className="bg-secondary">Marketing</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow-dark.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-4.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
      <ColorCard className="bg-secondary">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-white ">Content</ColorCard.Title>
            <ColorCard.Title className="bg-white">Creation</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow-dark.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-5.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
      <ColorCard className="bg-primary">
        <div className="">
          <div className="">
            <ColorCard.Title className="bg-secondary ">Analytics and </ColorCard.Title>
            <ColorCard.Title className="bg-secondary">Tracking</ColorCard.Title>
          </div>
          <div className="flex gap-4 items-center mt-16 xl:mt-24">
            <Image src="/arrow.svg" height={41} width={41} alt="arrow" />
            <p className="text-xl text-white">Learn more</p>
          </div>
        </div>
        <Image src="/cards/card-3.png" className="w-1/2 object-contain max-h-52" alt="hero" width={210} height={210} />
      </ColorCard>
    </section>
  );
};

export default CardSection;
