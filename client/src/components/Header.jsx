import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-center bg-baseDark text-white">
      <nav className="w-base flex justify-between items-center py-3">
        <Link to={"/"} className="text-2xl">
          @APPREST
        </Link>
        <Link to={"/create"} className="bg-white text-black rounded py-1 px-4">
          Create Post
        </Link>
      </nav>
    </header>
  );
};

export default Header;
