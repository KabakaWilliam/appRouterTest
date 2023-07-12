"use client";

import { useState } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}
const Button = ({ className, ...props }: ButtonProps) => {
  const [buttonAmount, setButtonAmount] = useState(0);
  const clickHelper = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setButtonAmount(buttonAmount + 1);
  };
  return (
    <button
      className="bg-slate-600 rounded-lg w-[200px] truncate p-2"
      onClick={clickHelper}
    >{`clicked ${buttonAmount} times`}</button>
  );
};

export default Button;
