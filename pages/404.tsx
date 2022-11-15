import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h2 className="text-2xl m-4">Ooh crab!</h2>
      <h3 className="text-xl m-2">
        The page you are looking for does not exist.
      </h3>
      <p>
        If you want to go back to the home page, feel free to click the button
        below. If not, feel free to stay here.
      </p>
      <Link href="/" passHref className=" cursor-pointer">
        <button className="uppercase px-3 py-3 bg-violet-600 rounded-full font-bold m-4">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
