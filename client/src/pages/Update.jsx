import React from 'react'

const Update = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-base flex justify-center">
        <form className="flex flex-col space-y-2 w-96 text-center my-5">
          <p className="text-lg font-semibold">Update post</p>
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter title..."
            required
            name="title"
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="ented image adress..."
            required
            name="image"
          />
          <input
            type="text"
            className="py-2 px-3 border rounded shadow-md"
            placeholder="enter descriptions..."
            required
            name="description"
          />
          <button className="w-44 mx-auto bg-black text-white rounded py-2">
            update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update