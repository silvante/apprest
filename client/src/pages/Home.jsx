import React, { useEffect, useState } from "react";
import HomeVan from "../components/HomeVan";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [Posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const fatchData = async () => {
    const { data } = await axios.get("http://localhost:4000/api/posts");
    setPosts(data);
  };
  useEffect(() => {
    fatchData();
  }, []);
  const deletePost = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:4000/api/posts/${id}`);
    fatchData();
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-base">
        <HomeVan />
        <ul className="w-full space-y-3">
          {Posts.map((post) => {
            return (
              <li
                key={post._id}
                className=" bg-white w-full rounded p-3 flex space-x-3 shadow-md"
              >
                <div className=" w-64 bg-baseLight h-64 rounded flex justify-center items-center overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-4">
                  <div>
                    <p className="text-2xl font-bold">{post.title}</p>
                    <p>{post.description}</p>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      to={`/update/${post._id}`}
                      className="py-2 px-4 bg-black text-white rounded inline-block"
                    >
                      update post
                    </Link>
                    <form onSubmit={deletePost}>
                      <button
                        type="submit"
                        onClick={() => setId(post._id)}
                        className="py-2 px-4 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
