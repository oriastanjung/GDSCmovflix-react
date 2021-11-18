import React from "react";
import PropTypes from "prop-types";

export default function GetMovies(props) {
  const key = "whislist";
  function addToWhislist(ID, judul, lokasiImg, overview) {
    let whislist = [];
    let storeWhislist;

    storeWhislist = JSON.parse(localStorage.getItem(key));

    if (storeWhislist === null) {
      // console.log(storeWhislist);
      whislist.push({
        id: ID,
        title: judul,
        img: lokasiImg,
        overview: overview,
      });
      localStorage.setItem(key, JSON.stringify(whislist));
    } else {
      // console.log(storeWhislist);
      whislist = whislist.concat(storeWhislist);
      whislist.push({
        id: ID,
        title: judul,
        img: lokasiImg,
        overview: overview,
      });
      localStorage.setItem(key, JSON.stringify(whislist));
    }
    alert("Add to Wishlist Success :)");
  }

  const IMG_URL = `https://image.tmdb.org/t/p/w500`;

  const takeID = (id, title, img, overview) => {
    let modalContent;
    let modalImg;
    let modalTitle;
    let modalDesc;
    let modalMovie;
    let modalThumbnail;
    let modalInfo;
    let modalCloseButton;

    const modalLoc = document.getElementById("modal");
    modalLoc.innerHTML = "";
    modalLoc.style.display = "block";

    modalLoc.innerHTML = "";

    modalLoc.style.display = "block";
    modalContent = `<div class="modal-content">`;
    modalCloseButton = `<div id="close-btn" class="close">&times;</div>`;
    modalMovie = ` <div class="modal-movie">`;
    modalThumbnail = `<div class="modal-movie-thumbnail" >`;
    modalImg = `<img src="${IMG_URL}${img}" alt="" srcset=""></div>`;
    modalInfo = `<div class="modal-movie-info">`;
    modalTitle = `<div class="modal-movie-info-title"> <h2>${title}</h2></div>`;
    modalDesc = `<div class="modal-movie-info-description"><p>${overview}</p></div>`;

    modalLoc.innerHTML +=
      modalContent +
      modalCloseButton +
      modalMovie +
      modalThumbnail +
      modalImg +
      modalInfo +
      modalTitle +
      modalDesc +
      `<div id="modalWhislist" class="modalWhislist">
        <p>Add To Whislist</p>
      </div>` +
      `</div></div></div>`;

    let closeButton = document.getElementById("close-btn");
    closeButton.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });

    if (document.getElementById("modalWhislist")) {
      document.getElementById("modalWhislist").addEventListener("click", () => {
        addToWhislist(id, title, `${IMG_URL}${img}`, overview);
      });
    }
  };

  return (
    <article
      className="movies"
      onClick={() =>
        takeID(
          props.listItem.id,
          props.listItem.title,
          props.listItem.poster_path,
          props.listItem.overview
        )
      }
    >
      <div className="moviesThumbnail">
        <img
          className="moviesImg"
          src={`${IMG_URL}${props.listItem.poster_path}`}
          alt="film1"
        />
      </div>

      <div className="moviesInfo">
        <h2 className="moviesTitle">{props.listItem.title}</h2>
        <p className="moviesRating">
          Rating : &#9733;${props.listItem.vote_average}/10
        </p>
        <p className="moviesDesc">
          {props.listItem.overview}
          <span>
            <a
              target="blank"
              href={`https://www.themoviedb.org/movie/${props.listItem.id}`}
            >
              Read More in TMDB
            </a>
          </span>
        </p>
      </div>
    </article>
  );
}

GetMovies.propTypes = {
  listItem: PropTypes.object,
};
