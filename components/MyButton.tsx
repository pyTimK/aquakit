import { interFont, jsoFont } from "@/styles/fonts";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface MyButtonProps {
  onClick?: MouseEventHandler;
  label: string;
  type?: "button" | "submit" | "reset";
  noMargin?: boolean;
  color?: string;
  outline?: boolean;
  textColor?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  onClick,
  label,
  type,
  noMargin = false,
  color,
  outline,
  textColor,
}) => {
  return (
    <motion.button
      type={type}
      className={`fit-content ${
        noMargin ? "m-0" : "m-auto"
      } outline-none shadow-none`}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
    >
      <div
        className={`rounded-2xl ${
          outline ? "" : color || "bg-darker_blue"
        } py-1 px-5 fit-content m-auto`}
      >
        <p className={`${interFont} ${textColor ?? `text-white`} font-light`}>
          {label}
        </p>
      </div>
    </motion.button>
  );
};

export default MyButton;
