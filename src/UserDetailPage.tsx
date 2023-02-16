import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { UserResponse } from "./types";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserResponse>();
  const [uDetails, setUDetails] = useState<UserResponse>();
  const checkIcon = (
    <FontAwesomeIcon icon={faCircleCheck} className="checkIcon" />
  );
  const xIcon = <FontAwesomeIcon icon={faCircleXmark} className="xIcon" />;

  const getUserDetails = async (id: number) => {
    try {
      const response = await axios.get<UserResponse>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails(id);
  }, [id]);

  const getUserToDo = async (id: number) => {
    try {
      const response = await axios.get<UserResponse>(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setUDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserToDo(id);
  }, [id]);

  return (
    <div className="App">
      <div className="app-header">
        <img
          src="/src/assets/logo-transparent.png"
          alt="logo"
          className="logo"
        />
        <h2 className="title">Dettagli Utente</h2>
      </div>
      <main className="profiles">
        <section className="users">
          <article className="profile-detail">
            <div className="inner-details">
              <img
                className="profile-pic"
                src="https://robohash.org/mail@ashallendesign.co.uk"
                alt="pic"
              />
              <span className="profile-name">{user?.name}</span>
              <span className="profile-username-detail">{user?.username}</span>
              <span className="profile-username">{user?.email}</span>
            </div>

            <table className="profile-table">
              <thead>
                <tr>
                  <td>
                    <span className="profile-username-detail">UserId</span>
                  </td>
                  <td>
                    <span className="profile-username-detail">Id</span>
                  </td>
                  <td>
                    <span className="profile-username-detail">ToDo</span>
                  </td>
                  <td>
                    <span className="profile-username-detail">Done</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="profile-details">{uDetails?.userId}</p>
                  </td>
                  <td>
                    <p className="profile-details">{uDetails?.id}</p>
                  </td>
                  <td>
                    <p className="profile-details">{uDetails?.title}</p>
                  </td>
                  <td>
                    <p className="profile-details">
                      {uDetails?.completed ? checkIcon : xIcon}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </div>
  );
};

export default UserDetailPage;
