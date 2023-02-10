import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { UserResponse } from "./types";
import "./App.css";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserResponse>();

  useEffect(() => {
    axios
      .get<UserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <div className="App">
      <div className="app-header">
        <img
          src="/src/assets/logo-transparent.png"
          alt="logo"
          className="logo"
        />
        <h2 className="title-details">Dettagli Utente</h2>
      </div>
      <main className="profiles">
        {user && (
          <section className="users">
            <article className="profile-detail">
              <img
                className="profile-pic"
                src="https://robohash.org/mail@ashallendesign.co.uk"
                alt="pic"
              />
              <span className="profile-name">{user.name}</span>
              <span className="profile-username-detail">{user.username}</span>
              <span className="profile-username">{user.email}</span>
            </article>
          </section>
        )}
      </main>
    </div>
  );
};

export default UserDetailPage;
