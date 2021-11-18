import React, { useEffect, useState } from "react";
import axios from "axios";
import GetMovies from "./GetMovies";
import Flip from "react-reveal/Flip";
const api_key = `d769bee82cb0d71d5739396b64c7be50`;
const BASE_URL = `https://api.themoviedb.org/3`;

export default function Movie() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const discoverMovie = api.get("discover/movie", {
    params: { api_key },
  });

  useEffect(() => {
    discoverMovie.then((res) => {
      setData(res.data.results);
    });
  }, []);
  return (
    <section id="movieLocate" className="movie">
      {data.map((item, idx) => (
        <GetMovies key={idx} listItem={item} />
      ))}
    </section>
  );
}
