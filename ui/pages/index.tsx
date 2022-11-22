import axios from "axios";
import React from "react";
import Dashboard from "../components/Dashboard";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const refreshAccessToken = () => {
    const refreshToken = sessionStorage.getItem("refresh_token");

    if(!refreshToken) return;

    axios.get("http://localhost:8000/api/auth/refresh", {
      headers: { "Authorization": `Bearer ${refreshToken}` }
    })
    .then((res) => {
      const newToken = res.data?.accessToken;

      sessionStorage.setItem("access_token", newToken);
      setLoggedIn(true);
    })
    .catch(() => {});
  };

  const fetchAccessToken = () => {
    const accessToken = sessionStorage.getItem("access_token");

    if(!accessToken) return refreshAccessToken();

    axios.get("http://localhost:8000/", {
      headers: { "Authorization": `Bearer ${accessToken}` }
    })
    .then(() => setLoggedIn(true))
    .catch(() => refreshAccessToken());
  };

  React.useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div>
      {isLoggedIn ?
        <Dashboard />
      :
        <main className="
          min-w-full min-h-screen bg-gradient-to-t from-blue-700/80 via-indigo-800/90 to-violet-900/90
          grid place-items-center
        ">
          <div className="grid gap-8">
            <h1 className="text-3xl text-white font-bold text-center sm:text-4xl">
              Company Logo
            </h1>
            <LoginForm setLoggedIn={setLoggedIn} />
          </div>
        </main>
      }
    </div>
  );
}
