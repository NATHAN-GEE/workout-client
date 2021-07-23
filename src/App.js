import { useEffect, useState } from "react";
import "./App.css";
import Sitebar from "./Home/Navbar";
import Auth from "./auth/Auth";


function App() {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  return (
    <div>
      <Sitebar />
      <Auth updateToken={ updateToken}/>
    </div>
  );
}

export default App;
