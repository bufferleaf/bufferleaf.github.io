/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img style={{ width: "250%" }} ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img style={{ width: "250%" }} ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img style={{ width: "250%" }} ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
