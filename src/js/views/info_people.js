import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoPeople = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [img, setImg] = useState("");
  const { store, actions } = useContext(Context);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${params.id}`)
      .then((response) => response.json())
      .then((response) => setData(response.result));
  }, []);

  useEffect(() => {
    fetch(
      `https://starwars-visualguide.com/assets/img/characters/${params.id}` +
        ".jpg"
    ).then((response) => setImg(response.url));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card mb-3 shadow p-3 mb-5 bg-body rounded">
        <div className="row g-0 border border-warning">
          <div className="col-md-4">
          {data ? (
              <img src={img} className="" alt="Bootstrap" width="350" height="auto" />
            ) : (
              ".."
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{data ? data.properties.name : ".."}</h5>
        
        <p>Name: {data ? data.properties.name : ".."}</p>
        <p>Height: {data ? data.properties.height : ".."}</p>
        <p>Mass: {data ? data.properties.mass : ".."}</p>
        <p>Birth year: {data ? data.properties.birth_year : ".."}</p>
        <p>Gender: {data ? data.properties.gender : ".."}</p>
        
        
        <p className="card-text">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPeople;
