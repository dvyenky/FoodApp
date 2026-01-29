import { useState } from "react";

const Search = ({ resList, setFilterList }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex items-center mx-[20px] gap-4 relative">
      {/* Input Box */}
      <div className="relative w-[200px]">
        <input
          type="text"
          placeholder=" "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="peer w-full px-[5px] py-[10px] text-[16px] border-b-2 border-[#ccc] bg-transparent outline-none transition-colors duration-300 rounded-[5px]"
        />
        <label
          className="absolute left-[5px] top-[15px] text-[#777] text-[16px] pointer-events-none transition-all duration-300 
        peer-placeholder-shown:top-[22px] peer-placeholder-shown:text-[#777] peer-placeholder-shown:text-[16px]
        peer-focus:-top-[19px] peer-focus:text-[13px] peer-focus:text-black rounded-corner"
        >
          What's on your mind?
        </label>
      </div>

      {/* Search Button */}
      <button
        className="absolute left-[245px] bg-[#007bff] text-[#ffffff] border-0
            px-[20px] py-[10px] text-[16px] rounded-[5px]
            cursor-pointer transition-colors duration-300 ease-in-out
            hover:bg-[#0056b3] active:translate-y-[1px]"
        onClick={() => {
          const filtered = resList.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterList(filtered);
        }}
      >
        Search
      </button>

      {/* Top Restaurant Button */}
      <button
        className="absolute left-[355px] bg-[#007bff] text-[#ffffff] border-0
            px-[20px] py-[10px] text-[16px] rounded-[5px]
            cursor-pointer transition-colors duration-300 ease-in-out
            hover:bg-[#0056b3] active:translate-y-[1px]"
        onClick={() => {
          const topRated = resList.filter((item) => item.avgRating >= 4.3);
          setFilterList(topRated);
        }}
      >
        Top Restaurant
      </button>
    </div>
  );
};

export default Search;
