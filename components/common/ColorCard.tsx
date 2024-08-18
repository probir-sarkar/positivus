import React from "react";

import { cn } from "@/lib/utils";

const ColorCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-full flex justify-between border border-primary  rounded-[45px] p-8 shadow-[hsl(var(--primary))_0px_5px_0px]", className)} {...props} />
);

ColorCard.displayName = "ColorCard";

const ColorCardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("heading-3 w-fit px-1 leading-tight rounded-lg", className)} {...props} />
);

ColorCard.Title = ColorCardTitle;


export default ColorCard;
