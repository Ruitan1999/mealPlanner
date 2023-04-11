import React, { Fragment } from "react";
import Link from "next/link";
import classes from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <div className={classes.mainLogo}>
            <Image src={logo} alt={"logo"}></Image>
            <p>Meal Plan Helper</p>
          </div>
        </Link>
        <nav>
          <ul className={classes.list}>
            <NavItem href="/" label="Home" />
            <NavItem href="/getMealPlans" label="Meal Planner" />
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
  const router = useRouter();

  const style =
    router.pathname === props.href ? classes.active : classes.inactive;

  return (
    <li>
      <Link className={style} href={props.href}>
        {props.label}
      </Link>
    </li>
  );
};

export default NavBar;
