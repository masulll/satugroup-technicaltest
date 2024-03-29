"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    // validate search no blank space
    if (!keyword || keyword.trim() === "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative ">
      <input
        placeholder="Search"
        className="w-full p-2  text-color-primary placeholder:text-gray  focus:outline-1  border rounded-full bg-transparent "
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2 " onClick={handleSearch}>
        <MagnifyingGlass size={24} className="" />
      </button>
    </div>
  );
};

export default InputSearch;
