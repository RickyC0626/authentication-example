import React from "react";

export default function Dashboard({ setLoggedIn }: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoggedIn(false);
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
  }

  return (
    <main className="
      min-w-full min-h-screen bg-gradient-to-t from-blue-700/80 via-indigo-800/90 to-violet-900/90
      flex flex-col gap-4 justify-center place-items-center sm:gap-6
    ">
      <h1 className="text-3xl text-white font-bold text-center sm:text-4xl">
        Welcome back, {sessionStorage.getItem("username")}
      </h1>
      <button
        onClick={handleClick}
        className="
          w-fit px-4 py-2 rounded-md text-lg text-red-300 text-center font-semibold bg-red-400/20
          hover:outline outline-2 outline-red-300 sm:text-2xl sm:px-5 sm:py-3
        "
      >
        Log Out
      </button>
    </main>
  );
}
