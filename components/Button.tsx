import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large"; // Added size prop
  hoverEffect?: boolean; // Added hoverEffect prop
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  submitting,
  type = "button",
  bgColor = "bg-primary-purple",
  textColor = "text-white",
  size = "medium",
  hoverEffect = false,
}: Props) => {
  // Dynamic size classes
  const sizeClasses =
    size === "small"
      ? "py-2 px-4 text-sm"
      : size === "large"
      ? "py-4 px-8 text-lg"
      : "py-3 px-6 text-base";

  // Add hover effect class if enabled
  const hoverClass = hoverEffect ? "hover:bg-opacity-75 transition-all duration-300" : "";

  return (
    <button
      type={type}
      disabled={submitting}
      className={`flexCenter gap-3 rounded-xl font-medium max-md:w-full ${sizeClasses} ${bgColor} ${textColor} ${
        submitting ? "bg-black/50" : ""
      } ${hoverClass}`}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left icon" />}
      {title}
      {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right icon" />}
    </button>
  );
};

export default Button;
