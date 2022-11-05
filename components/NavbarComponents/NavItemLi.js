import React from "react";
import { NavLi } from "../styles/Elements.styles";

const NavItemLi = ({ title, className }) => {
  return <NavLi className={className}>{title}</NavLi>;
};

export default NavItemLi;
