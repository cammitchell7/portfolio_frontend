import { Card } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <Card className={styles.navBarCard}>
        <b>
          <Link href="/">Home </Link>|<Link href="/about-me"> About Me </Link>|
          <Link href="/projects"> Projects </Link>|
          <Link href="/contact"> Contact </Link>
        </b>
      </Card>
    </div>
  );
};

export default NavBar;
