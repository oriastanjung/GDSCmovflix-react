import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WhislistItem(props) {
  const key = "whislist";
  let [tempArr, setTempArr] = useState([]);
  const [storeWhislist, setStoreWhislist] = useState(
    JSON.parse(localStorage.getItem(key))
  );
  const removeFromWhislist = (idToRemove) => {
    let indexToRemove;
    indexToRemove = storeWhislist.findIndex((x) => x.id === idToRemove);

    // let tempArr = [];

    storeWhislist
      .filter((item, idx) => {
        if (idx != indexToRemove) {
          return item;
        }
      })
      .map((item) => {
        tempArr.push(item);
        // setTempArr(item);
      });
    setStoreWhislist(tempArr);
    localStorage.setItem("whislist", JSON.stringify(tempArr));
    alert("Remove From Wishlist Success");
    // window.location.reload();
  };

  return (
    <div>
      <div className="cardsWhislist">
        <div className="whislistIMG">
          <img src={props.imgPath} alt="propsimg" />
        </div>

        <div className="whislistInfo">
          <h3>{props.title}</h3>
          <p>{props.overview}</p>
        </div>
        <Link to="/GDSCmovflix-react/">
          <div
            id="close-btn-whislist"
            onClick={() => removeFromWhislist(props.id)}
            className="close close-whislist"
          >
            &times;
          </div>
        </Link>
      </div>
    </div>
  );
}
