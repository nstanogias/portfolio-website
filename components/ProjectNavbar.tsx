"use client";

import { Category } from "@/lib/types";

type NavItemProps = {
  value: Category | "all";
  active: string;
  handleFilterCategory: Function;
};

type ProjectNavbarProps = {
  handleFilterCategory: Function;
  active: string;
};

const NavItem = ({ value, active, handleFilterCategory }: NavItemProps) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

export default function ProjectNavbar(props: ProjectNavbarProps) {
  return (
    <nav className="flex px-3 py-2 space-x-3 list-none place-content-center">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="blockchain" {...props} />
      <NavItem value="angular" {...props} />
    </nav>
  );
}
