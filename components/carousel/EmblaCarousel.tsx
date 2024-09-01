import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Testimonial } from "../TestimonialSection";
import { StarIcon } from "../icons";

type PropType = {
  slides: Testimonial[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex md:-ml-8 px-2">
          {slides.map((slide, index) => (
            <div className="md:flex-[0_0_70%] flex-[0_0_100%] md:pl-8 px-2 select-none" key={index}>
              <div className="relative min-h-64 p-6 md:p-12 border border-secondary md:my-12 my-8 rounded-3xl ">
                <div className="absolute md:h-16 md:w-16 h-10 w-10 border-b border-r border-secondary rotate-45 md:-bottom-8 -bottom-5 md:left-16 left-10 bg-primary "></div>
                <p className="text-white md:md:text-lg">{slide.testimonial}</p>
              </div>
              <div className="ml-14 md:ml-24 pt-2">
                <h4 className="text-secondary heading-4">{slide.name}</h4>
                <p className="text-white">{slide.role}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>

      <div className=" flex justify-between max-w-3xl  mx-auto md:pt-20  p-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="flex gap-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? " text-secondary" : " text-white"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ rotate: 90 }}
              
            >
              <StarIcon />
            </DotButton>
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
