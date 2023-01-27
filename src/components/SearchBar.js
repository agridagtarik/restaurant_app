import React from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = () => {
  return (
    <div
      className="container input-group bg-body rounded-2 m-auto mb-2 align-self-center shadow "
      style={{
        width: "100%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <form className="d-flex " role="search" style={{ width: "100%" }}>
        <SearchOutlinedIcon />
        <input
          className="form-control me-2"
          type="search"
          placeholder="Mekan Ara..."
          style={{
            fontFamily: "Arial, FontAwesome",
            border: "none",
            text: "center",
          }}
          aria-label="Search"
        />
        <TuneOutlinedIcon />
      </form>
    </div>
  );
};

export default SearchBar;
