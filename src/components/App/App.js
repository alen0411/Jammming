import React from "react";

import "./App.css";
import Playlist from "../Playlist/Playlist"; 
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (   
    <div>
      <h1>
        Jammming
      </h1>
      <div className="App">
        <searchBar />
        <playlist />
      </div>
    </div>
  );
}

export default App;
