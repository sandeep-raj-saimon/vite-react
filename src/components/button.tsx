import React, { Children, ReactNode, useState } from "react";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger";
  children?: ReactNode;
}
const Button = ({ text, children, color = "primary" }: Props) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(true);
  };
  return (
    <>
      {showChildren && <div>{children}</div>}
      <div className={"btn btn-" + color} onClick={handleClick}>
        {text}
      </div>
    </>
  );
};

export default Button;
