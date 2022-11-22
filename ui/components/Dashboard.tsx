export default function Dashboard() {
  return (
    <main className="
      min-w-full min-h-screen bg-gradient-to-t from-blue-700/80 via-indigo-800/90 to-violet-900/90
      grid place-items-center
    ">
      <h1 className="text-3xl text-white font-bold text-center sm:text-4xl">
        Welcome back, {sessionStorage.getItem("username")}
      </h1>
    </main>
  );
}
