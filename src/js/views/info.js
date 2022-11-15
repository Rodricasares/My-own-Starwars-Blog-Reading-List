import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css"

const Info = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [img, setImg] = useState("");
  const { store, actions } = useContext(Context);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.id}`)
      .then((response) => response.json())
      .then((response) => setData(response.result));
  }, []);

  useEffect(() => {
    fetch(
      `https://starwars-visualguide.com/assets/img/planets/${params.id}` +
        ".jpg"
    ).then((response) => setImg(response.url));
  }, []);

  return (
    <div className="jumbotron jumbotron-fluid info">
      <div className="container">
      <h1 className="display-3 text-warning">{data ? data.properties.name : ".."}</h1>

        {data ? (
          <img
            src={img}
            className="rounded mx-auto d-block mb-4 rounded-circle"
            alt="Bootstrap"
            width="230"
            height="auto"
          />
        ) : (
          "..."
        )}
<div className="container">
<ul className="list-group ">
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white">
  <h3>Climate </h3>
    <span className="badge bg-warning rounded-pill">{data ? data.properties.climate : ".."}</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white">
  <h3 className="me-2">Gravity</h3>
    <span className="badge bg-warning rounded-pill">{data ? data.properties.gravity : ".."}
</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white">
  <h3>Population</h3><span className="badge bg-warning rounded-pill">{data ? data.properties.population : ".."}
</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white">
  <h3 className="me-2">Terrain</h3><span className="badge bg-warning rounded-pill">{data ? data.properties.terrain : ".."}
</span>
  </li>
</ul>
</div>
      </div>
    </div>
  );
};

export default Info;
