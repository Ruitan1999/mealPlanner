import React, { Fragment } from "react";
import Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <header className={classes.header1}>
        <Link href="/">
          <p>Meal Plan Helper</p>
        </Link>
        <nav>
          <ul className={classes.list}>
            <NavItem href="/" label="Home" />
            <NavItem href="/getmeal" label="Meal Planner" />
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.href}>{props.label}</Link>
    </li>
  );
};

export default NavBar;
