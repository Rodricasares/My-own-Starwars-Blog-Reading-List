import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  

  return (
    <nav className="navbar navbar-light bg-dark ps-5">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
            className="bg-dark"
            alt="Bootstrap"
            width="100"
            height="50"
          />
        </span>
      </Link>
      <div className="ml-auto mx-5">
        <div className="btn-group dropstart mx-5">
          <button
            type="button"
            className="btn btn-outline-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Action
          </button>
          <ul className="dropdown-menu dropdown-menu-dark ">
            {store.favorits.map((value, index) => {
              return (
                <li className="dropdown-item d-flex justify-content-between" key={index}>
                  {value.name}
                  <button type="button" className="btn btn-warning" onClick={() => actions.deleteFavorit(value.uid)}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
