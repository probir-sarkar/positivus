"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn(
      "border border-primary rounded-[45px] p-4 md:p-6 xl:p-8 px-6 md:px-8 xl:px-12 shadow-[hsl(var(--primary))_0px_5px_0px] bg-primary-foreground data-[state=open]:bg-secondary mb-6",
      className
    )}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-2 xl:py-4 font-medium transition-all group",
        className
      )}
      {...props}
    >
      {children}
      <div className="h-10 xl:h-12 w-10 xl:w-12 rounded-full bg-primary-foreground flex items-center justify-center border border-primary">
        <Minus strokeWidth={3} size={24}  className="group-data-[state=closed]:hidden w-4 xl:w-6" />
        <Plus strokeWidth={3} size={24} className="group-data-[state=open]:hidden w-4 xl:w-6" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("py-2 xl:py-4  border-t border-primary", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
