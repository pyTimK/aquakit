import { ChangeEventHandler, RefObject } from "react";

interface MyInputProps {
  type?: "text" | "number" | "email" | "password"; // Add more types as needed
  placeholder: string;
  innerRef: RefObject<HTMLInputElement>;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  dark?: boolean;
  bg?: string;
  alignment?: string;
}

const MyInput: React.FC<MyInputProps> = ({
  type = "text",
  placeholder,
  innerRef,
  error = false,
  onChange,
  dark = false,
  bg,
  alignment,
}) => {
  return (
    <div className="flex justify-center">
      <input
        ref={innerRef}
        className={`border ${
          error ? "border-red" : "border-darker_blue"
        } rounded-lg w-full max-w-sm ${
          dark ? "text-white font-light p-1 text-right" : "p-4"
        } ${bg ? bg : dark ? "bg-darker_blue2" : "bg-light_blue"} ${
          alignment && `${alignment}`
        }`}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default MyInput;
