import React from "react";
import SearchList from "./SearchList";

export default function SearchPage() {
  return (
    <main id="header">
      <div className="modal" id="modal"></div>
      <div className="searchList">
        <h2>Search List</h2>
      </div>
      <SearchList />
    </main>
  );
}
