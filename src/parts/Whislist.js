import React, { useState } from "react";
import WhislistItem from "./WhislistItem";
import "../assets/css/whislist.css";
export default function Whislist() {
  const key = "whislist";
  let [whislistList, setWhislistList] = useState([]);
  let storeWhislist = [];
  whislistList = whislistList.concat(JSON.parse(localStorage.getItem(key)));

  return (
    <div>
      <div id="whislistErr" className="whislistErr">
        <h2>Sorry, you still not add movies to the Wishlist...</h2>
      </div>
      <ul>
        {whislistList.map((item, idx) => {
          setTimeout(() => {
            document.getElementById("whislistErr").style.display = "none";
          }, 1);
          return (
            <li key={idx}>
              <WhislistItem
                id={item.id}
                title={item.title}
                imgPath={item.img}
                overview={item.overview}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
