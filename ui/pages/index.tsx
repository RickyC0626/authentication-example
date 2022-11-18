import React from "react";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div>
      <main className="
        min-w-full min-h-screen bg-gradient-to-t from-blue-700/80 via-indigo-800/90 to-violet-900/90
        grid place-items-center
      ">
        <LoginForm />
      </main>
    </div>
  );
}
