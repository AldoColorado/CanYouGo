import React, { useEffect, useRef, useState } from "react";
import "./searchBox.css";
import SearchIcon from '@material-ui/icons/Search';


const SearchBox = ({
  valorBuscar,
  setValorBuscar,
}: {
  valorBuscar: string;
  setValorBuscar: (valor: string) => void;
}) => (
  <div>
    <div className="search-box-main">
      <div className="search-box">
        <input
          placeholder="Search"
          onChange={(e) => setValorBuscar(e.target.value)}
          value={valorBuscar}
        />
        <SearchIcon />
      </div>
    </div>
  </div>
);

export default SearchBox;
