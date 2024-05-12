import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeVan = () => {
  const [lengh, setlengh] = useState([]);
  const fatchLengh = async () => {
    const { data } = await axios.get("http://localhost:4000/api/posts");
    setlengh(data);
  };
  useEffect(() => {
    fatchLengh();
  }, []);
  return (
    <div className="w-full flex justify-between items-center py-4">
      <h2 className="text-2xl font-bold">All posts</h2>
      <p>apprest.uz</p>
      <h2 className="text-2xl font-bold">total: {lengh.length}</h2>
    </div>
  );
};

export default HomeVan;
