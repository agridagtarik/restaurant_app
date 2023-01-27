import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Navbar = () => {
  return (
    <div
      className="container-fluid sticky-top mb-3 bg-body"
      style={{ marginTop: "10px", height: "2.5rem" }}
    >
      <div className="row">
        <HiOutlineMenuAlt2 className="col-2" style={{ fontWeight: "bold" }} />
        <h5 className="col-8 text-center">Ana Sayfa</h5>
        <div className="col-2" style={{ paddingLeft: "50px" }}>
          <CardGiftcardOutlinedIcon style={{ marginRight: "10px" }} />
          <ReceiptLongIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
