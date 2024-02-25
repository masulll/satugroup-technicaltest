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
        className="w-full p-2 rounded-xl text-color-primary placeholder:text-color-primary  focus:outline-1 outline-slate-50 border "
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2 " onClick={handleSearch}>
        <MagnifyingGlass size={24} className="text-color-primary" />
      </button>
    </div>
  );
};

export default InputSearch;
