import React from "react";

type GradientProps = {
  variant?: "blue" | "purple" | "cyan" | "mixed" | "yellow";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  className?: string;
};

const getPositionClasses = (position: GradientProps["position"]) => {
  switch (position) {
    case "top-left":
      return "top-[10%] -left-[10%]";
    case "top-right":
      return "top-[10%] -right-[10%]";
    case "bottom-left":
      return "bottom-[10%] -left-[10%]";
    case "bottom-right":
      return "bottom-[10%] -right-[10%]";
    case "center":
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    default:
      return "top-[10%] -left-[10%]";
  }
};

const getSizeClasses = (size: GradientProps["size"]) => {
  switch (size) {
    case "sm":
      return "w-[25%] h-[25%]";
    case "md":
      return "w-[35%] h-[35%]";
    case "lg":
      return "w-[45%] h-[45%]";
    case "xl":
      return "w-[60%] h-[60%]";
    default:
      return "w-[35%] h-[35%]";
  }
};

const getGradientClasses = (variant: GradientProps["variant"]) => {
  switch (variant) {
    case "blue":
      return "bg-brand-blue/5 dark:bg-brand-blue/10";
    case "purple":
      return "bg-brand-accent-purple/5 dark:bg-brand-accent-purple/10";
    case "cyan":
      return "bg-brand-accent-cyan/5 dark:bg-brand-accent-cyan/10";
    case "yellow":
      return "bg-brand-accent-yellow/5 dark:bg-brand-accent-yellow/10";
    case "mixed":
      return "bg-gradient-to-br from-brand-blue/5 via-brand-accent-purple/5 to-brand-accent-cyan/5 dark:from-brand-blue/10 dark:via-brand-accent-purple/10 dark:to-brand-accent-cyan/10";
    default:
      return "bg-brand-blue/5 dark:bg-brand-blue/10";
  }
};

export const AnimatedGradient = ({
  variant = "blue",
  position = "top-left",
  size = "md",
  delay = 0,
  className = "",
}: GradientProps) => {
  const positionClasses = getPositionClasses(position);
  const sizeClasses = getSizeClasses(size);
  const gradientClasses = getGradientClasses(variant);
  
  return (
    <div
      className={`absolute ${positionClasses} ${sizeClasses} ${gradientClasses} rounded-full blur-3xl animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export const SectionGradients = () => {
  return (
    <>
      <AnimatedGradient variant="blue" position="top-left" size="lg" />
      <AnimatedGradient variant="purple" position="bottom-right" size="md" delay={1.5} />
    </>
  );
}; 