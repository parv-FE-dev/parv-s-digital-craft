import * as React from "react";
import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
} as const;

type Width = keyof typeof widths;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: Width;
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ width = "default", className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full px-6 md:px-8", widths[width], className)}
      {...props}
    >
      {children}
    </div>
  ),
);
Container.displayName = "Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  width?: Width;
  containerClassName?: string;
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ width, className, containerClassName, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("py-24 md:py-32 relative", className)}
      {...props}
    >
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  ),
);
Section.displayName = "Section";
