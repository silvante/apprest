import React from "react";
import HomeVan from "../components/HomeVan";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-base">
        <HomeVan />
        <ul className="w-full">
          <li className=" bg-white w-full rounded p-3 flex space-x-3 shadow-md">
            <div className=" w-64 bg-baseLight h-64 rounded flex justify-center items-center overflow-hidden">
              <img
                src="https://i1.sndcdn.com/artworks-h09hjyLzJ9mYd7F2-iNmZbw-t500x500.jpg"
                alt="post image"
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-2xl font-bold">Title post</p>
              <p>descriptions</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
