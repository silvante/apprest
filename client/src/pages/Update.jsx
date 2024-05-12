import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();

  const fatchData = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/posts/${id}`);
    settitle(data[0].title);
    setimage(data[0].image);
    setdescription(data[0].description);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/posts/${id}`, {
      title: title,
      image: image,
      description: description,
    });
    navigate("/");
  };

  useEffect(() => {
    fatchData();
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-base flex justify-center">
        <form
          className="flex flex-col space-y-2 w-96 text-center my-5"
          onSubmit={handleUpdate}
        >
          <p className="text-lg font-semibold">Update post</p>
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter title..."
            required
            name="title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="ented image adress..."
            required
            name="image"
            onChange={(e) => setimage(e.target.value)}
            value={image}
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter descriptions..."
            required
            name="description"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />
          <button className="w-44 mx-auto bg-black text-white rounded py-2">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
