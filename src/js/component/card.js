import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Card = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="home">
      <h1 className="text-warning m-5">Planets</h1>
      <div className="d-flex planets">
        {store.planetProperties.map((value, index) => {
          return (
            <div className="card col-2 p-2 m-5" key={index}>
              <div className="card-body ">
                <div className="row ">
                  <img
                    src={
                      "https://starwars-visualguide.com/assets/img/planets/" +
                      value.uid +
                      ".jpg"
                    }
                    className="rounded-circle"
                    alt="Bootstrap"
                  />
                </div>
              </div>
              <h5 className="card-title text-center text-warning">{value.name}</h5>
              {Object.keys(value).map((key, y) => {
                if (typeof value[key] != "object")
                  return (
                    <p className="text-start text-secondary" key={y}>
                     {/*} {key + " : " + value[key]} */}
                    </p>
                  );
              })}

              <div className="row m-0 p-0 ">
                <Link to={`/info/${value.uid}`} className="offset-1 col-2  p-0">
                  <button className="btn btn-outline-primary btn-sm col-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </button>
                </Link>
                <button
                  className="btn btn-outline-warning btn-sm offset-6 col-2 "
                  onClick={() => {
                    actions.setFavorit({
                      uid: value.uid,
                      name: value.name,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-warning m-5">Characters</h1>
      <div className="d-flex characters">
        {store.properties.map((value, index) => {
          return (
            <div className="card col-2 p-2 m-5 " key={index}>
              <div className="card-body">
                <div className="row">
                  <img
                    src={
                      "https://starwars-visualguide.com/assets/img/characters/" +
                      value.uid +
                      ".jpg"
                    }
                    className="rounded-circle"
                    alt="Bootstrap"
                  />
                </div>
              </div>
              <h5 className="card-title text-center text-warning">{value.name}</h5>
              {Object.keys(value).map((key, y) => {
                if (typeof value[key] != "object")
                  return (
                    <p className="text-start text-secondary" key={y}>
                     {/* {key + " : " + value[key]}*/}
                    </p>
                  );
              })}

              <div className="row m-0 p-0 ">
                <Link
                  to={`/info_people/${value.uid}`}
                  className="offset-1 col-2  p-0"
                >
                  <button className="btn btn-outline-primary btn-sm col-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-info-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </button>
                </Link>
                <button
                  className="btn btn-outline-warning btn-sm offset-6 col-2"
                  onClick={() => {
                    actions.setFavorit({
                      uid: value.uid,
                      name: value.name,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
