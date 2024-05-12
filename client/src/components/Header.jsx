import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-center bg-baseDark text-white">
      <nav className="w-base flex justify-between items-center py-3">
        <logo className="text-2xl">@APPREST</logo>
        <button className="bg-white text-black rounded py-1 px-4">Create Post</button>
      </nav>
    </header>
  );
};

export default Header;
