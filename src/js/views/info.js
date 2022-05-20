import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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
    <div className="container mt-5">
      <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
        <div class="row g-0 border border-warning">
          <div class="col-md-4">
            {data ? (
              <img src={img} className="" alt="Bootstrap" width="350" height="auto" />
            ) : (
              ".."
            )}
          </div>
          <div class="col-md-8">
            <div class="card-body ">
              <h5 class="card-title">{data ? data.properties.name : ".."}</h5>
              <p>Climate: {data ? data.properties.climate : ".."}</p>
              <p>Diameter: {data ? data.properties.diameter : ".."}</p>
              <p>Gravity: {data ? data.properties.gravity : ".."}</p>
              <p>Terrain: {data ? data.properties.terrain : ".."}</p>
              <p>Population: {data ? data.properties.population : ".."}</p>
              <p>Orbital period: {data ? data.properties.orbital_period : ".."}</p>
              <p>Rotation period: {data ? data.properties.rotation_period : ".."}</p>
              
              <p class="card-text">
                <small class="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
