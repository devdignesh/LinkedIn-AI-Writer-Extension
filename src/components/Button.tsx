import React from "react";

const Button = ({
  onClick,
  icon,
  label,
  className,
  iconSize,
  style 
}: {
  onClick: () => void;
  icon: string;
  label: string;
  className: string;
  iconSize:string
  style ?: React.CSSProperties
}) => (
  <button
    className={`flex flex-row py-2 px-6 rounded-lg items-center justify-end gap-x-3 ${className}`}
    style={style}
    onClick={onClick}
  >
    <img src={icon} alt="" className={`${iconSize} object-cover`} />
    <span className="font-medium">{label}</span>
  </button>
);

export default Button;