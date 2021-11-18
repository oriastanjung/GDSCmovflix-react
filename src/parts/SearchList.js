import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import GetMovies from "./GetMovies";

const API_KEY = `api_key=d769bee82cb0d71d5739396b64c7be50`;
const BASE_URL = `https://api.themoviedb.org/3`;

const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

export default function SearchList() {
  const [data, setData] = useState([]);
  const { searchTerm } = useContext(UserContext);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <section id="movieLocate" className="movie">
      {data
        .filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((item, idx) => (
          <GetMovies key={idx} listItem={item} />
        ))}
    </section>
  );
}
