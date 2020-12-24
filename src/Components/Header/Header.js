import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../logo.svg";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="overlay">
        <Link to="/">
          <Logo className="logo-brand" />
        </Link>
      </div>
    </nav>
  );
};
