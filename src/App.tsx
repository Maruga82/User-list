import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserResponse } from "./types";
import axios from "axios";
import UserDetailPage from "./UserDetailPage";

const UserPage = () => {
  const [userItems, setUserItems] = useState<Array<UserResponse>>([]);

  useEffect(() => {
    axios
      .get<UserResponse[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserItems(res.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <img 
        src="/src/assets/logo-transparent.png" 
        alt="logo" 
        className="logo" />
        <h1 className="title">Lista Utenti</h1>
      </header>
      <main className="profiles">
        <section className="users">
          {userItems.map((user, index) => (
            <Link to={`/users/${user.id}`} key={index}>
              <article className="profile">
                <img
                  className="profile-pic"
                  src="https://robohash.org/mail@ashallendesign.co.uk"
                  alt="pic"
                />
                <span className="profile-name">{user.name}</span>
                <span className="profile-username">{user.username}</span>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<UserPage />} />
    //   <Route path="/users/:id" element={<UserDetailPage />} />
    // </Routes>
    <UserPage />
  );
};

export default App;
