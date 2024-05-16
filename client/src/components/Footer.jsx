import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full flex justify-center py-3 bg-baseDark text-white mt-5">
      <div className="w-base flex justify-between items-center">
        <Link className="text-2xl">@APPREST</Link>
        <Link>carete new</Link>
        <h2 className="text-2xl">TOTAL: 4</h2>
      </div>
    </div>
  );
};

export default Footer;
