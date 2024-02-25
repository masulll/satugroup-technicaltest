import Link from "next/link";
import InputSearch from "./InputSearch";

export const Navbar = () => {
  var time = new Date();
  let hours = time.getHours();

  return (
    <header className="bg bg-slate-400 sticky top-0 z-50">
      <div className="flex md:flex-row flex-col justify-between p-3 gap-2 md:items-center">
        <Link href={"/"} className="font-bold text-3xl italic">
          NEWS PORTAL
        </Link>

        <h1 className=" font-medium">
          {time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>

        <InputSearch />
      </div>
    </header>
  );
};
