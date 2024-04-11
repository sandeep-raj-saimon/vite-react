import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  const [showAlert, setShowAlert] = useState(true);
  const handleClick = () => {
    setShowAlert((prev) => !prev);
  };
  return (
    <>
      {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show">
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleClick}
          ></button>
        </div>
      )}
    </>
  );
};
export default Alert;
