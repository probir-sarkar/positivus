import React from "react";
import { cn } from "@/lib/utils";

const TitleSection = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <section className={cn("flex gap-8 items-center  container my-8", className)} {...props} />;
};

const Title = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={cn("heading-2 bg-secondary px-2 leading-tight rounded-lg", className)} {...props} />;
};

TitleSection.Title = Title;

const SubTitle = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("text-lg max-w-[40rem]", className)} {...props} />;
};

TitleSection.SubTitle = SubTitle;


export default TitleSection;
