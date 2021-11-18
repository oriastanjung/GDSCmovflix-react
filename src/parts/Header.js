import React, { useState, useContext } from "react";
import WhislistSVG from "../assets/whislist.svg";
import FilmSVG from "../assets/film.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header(props) {
  const listClass = ["sticky"];
  listClass.push(props.className);

  const [search, setSearch] = useState("");

  const { searchTerm, setSearchTerm } = useContext(UserContext);
  setSearchTerm(search);

  return (
    <header className={listClass.join(" ")}>
      <nav className="navigation sticky">
        <div className="navTitle">
          <Link to="/GDSCmovflix-react">
            <h1>MovFlix</h1>
          </Link>
        </div>
        <div className="navBar">
          <ul className="navContainer">
            <li className="navItem">
              <form id="form">
                <Link to={`/GDSCmovflix-react/search`}>
                  <input
                    id="search"
                    type="text"
                    placeholder="Search Movies"
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </Link>
              </form>
            </li>
            <li className="navItem">
              <span className="hidden">
                <Link to="/GDSCmovflix-react/whislist">
                  <img className="navIcon" src={WhislistSVG} alt="" />
                </Link>
              </span>
              <Link to="/GDSCmovflix-react/whislist">Wishlist</Link>
            </li>
            <li className="navItem">
              <span className="hidden">
                <a href="#movieLocate">
                  <img className="navIcon" src={FilmSVG} alt="" />
                </a>
              </span>
              <a href="#movieLocate"> Movies </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
