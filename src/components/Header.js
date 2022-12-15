import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const prev = () => {
    navigate(+1);
  };
  return (
    <Link to={"./"}>
      <header className="header" id="header">
        <button onClick={back}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <h1>Movies</h1>
        <button onClick={prev}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </header>
    </Link>
  );
}
