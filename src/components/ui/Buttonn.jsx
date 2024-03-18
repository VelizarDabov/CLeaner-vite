import React from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";
const Buttonn = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:scale-105 ${
    px || "px-7"
  } ${white ? "text-blue-500" : "text-white"} ${className || ""}`;
  const spanClasses = `relative z-10`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children} </span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Buttonn;
