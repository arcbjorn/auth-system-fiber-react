import React from "react";
import { Link } from "react-router-dom";

type NavProps = {
  name: string;
  setName: (name: string) => void;
};

const Nav = ({ name, setName }: NavProps) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });

    setName("");
  };

  let menu;

  if (!name) {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand active">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
