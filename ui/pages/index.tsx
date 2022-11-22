import axios from "axios";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import Dashboard from "../components/Dashboard";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

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

    setLoading(true);

    axios.get("http://localhost:8000/", {
      headers: { "Authorization": `Bearer ${accessToken}` }
    })
    .then(() => setLoggedIn(true))
    .catch(() => refreshAccessToken())
    .finally(() => {
      setTimeout(() => setLoading(false), 1000);
    });
  };

  React.useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <div>
      <main className="
        min-w-full min-h-screen bg-gradient-to-t from-blue-700/80 via-indigo-800/90 to-violet-900/90
        grid place-items-center
      ">
        {isLoading ?
          <CgSpinner className="animate-spin w-20 h-20 rounded-full text-white m-auto sm:w-24 sm:h-24" />
        :
          isLoggedIn ?
            <Dashboard setLoggedIn={setLoggedIn} />
          :
            <div className="grid gap-8">
              <h1 className="text-3xl text-white font-bold text-center sm:text-4xl">
                Company Logo
              </h1>
              <LoginForm setLoggedIn={setLoggedIn} />
            </div>
        }
      </main>
    </div>
  );
}
