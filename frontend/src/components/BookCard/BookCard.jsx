import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };
  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/remove-book-from-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col">
      <Link to={`/view-book-details/${data._id}`}>
        <div className="">
          <div className="bg-zinc-900 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <div>
            <h2 className="mt-4 text-xl  text-white font-semibold">
              {data.title}
            </h2>
            <p className="mt-2 font-semibold text-zinc-400 i">
              by {data.author}
            </p>
            <p className="mt-2 font-semibold text-zinc-200 text-xl">
              ₹ {data.price}
            </p>
          </div>
        </div>
      </Link>
      {favourite && (
        <button
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 rounded-full border-2 border-yellow-600 text-white font-semibold shadow-lg hover:from-yellow-500 hover:to-yellow-600 hover:border-yellow-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out mt-4"
          onClick={handleRemoveBook}
        >
          Remove from favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;
