import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/posts", {
        title: title,
        image: image,
        description: description,
      });
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-base flex justify-center">
        <form
          className="flex flex-col space-y-2 w-96 text-center my-5"
          onSubmit={handleSubmit}
        >
          <p className="text-lg font-semibold">Create new post</p>
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter title..."
            required
            name="title"
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="ented image adress..."
            required
            name="image"
            onChange={(e) => setimage(e.target.value)}
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter descriptions..."
            required
            name="description"
            onChange={(e) => setdescription(e.target.value)}
          />
          <button className="w-44 mx-auto bg-black text-white rounded py-2">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
