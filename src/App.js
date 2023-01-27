import React from "react";
import Navbar from "./components/Navbar.js";
import SearchBar from "./components/SearchBar.js";
import Places from "./components/Places.js";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <SearchBar />
      <Places />
    </div>
  );
};

export default App;
