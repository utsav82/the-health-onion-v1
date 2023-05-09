"use client";
import clsx from "clsx";
const Button = ({
  type = "button",
  width,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  rounded,
  backgroundColor,
  text
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        px-3 
        py-2 
        text-${text?text:"sm"} 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        hover:scale-105
        transition-transform		
        `,
        backgroundColor,
        width,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
        !danger &&
        "bg-[#43C7AB] hover:bg-sky-600 focus-visible:outline-sky-600",
        rounded ? "rounded-[50px]" : "rounded-md"
      )}>
      {children}
    </button>
  );
};

export default Button;
