import React from "react";
import HeroIMG from "../assets/heroIMG.svg";

export default function Hero(props) {
  const listClass = ["hero"];
  listClass.push(props.className);

  return (
    <section className={listClass.join(" ")}>
      <article className="heroInfo">
        <h2>Search and read the most rated and popular movies based on IMDb</h2>
        <p>
          In MOVFLIX, you can search and read a lot of high rated movies that
          will bring back your mood and make you happy again.
        </p>
        <button>
          <a href="#movieLocate">See Now</a>
        </button>
      </article>

      <aside className="heroImg">
        <img src={HeroIMG} alt="heroImg" />
      </aside>
    </section>
  );
}
