import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css"


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
<div className="jumbotron jumbotron-fluid infoPeople">
      <div className="container">
      <h1 className="display-3 text-warning">{data ? data.properties.name : ".."}</h1>

      {data ? (
 <img
 src={img}
 className="rounded mx-auto d-block mb-4 rounded-2"
 alt="Bootstrap"
 width="230"
 height="auto"
/>
            ) : (
              ".."
            )}
<div className="container ">
<ul className="list-group ">
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
  <h3>Name </h3>
    <span className="badge bg-warning rounded-pill">{data ? data.properties.name : ".."}</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
  <h3 className="me-2">Height</h3>
    <span className="badge bg-warning rounded-pill">{data ? data.properties.height : ".."}
</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
  <h3>Mass</h3><span className="badge bg-warning rounded-pill">{data ? data.properties.mass : ".."}
</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
  <h3 className="me-2">Birth year</h3><span className="badge bg-warning rounded-pill">{data ? data.properties.birth_year : ".."}
</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
  <h3 className="me-2">Gender</h3><span className="badge bg-warning rounded-pill">{data ? data.properties.gender : ".."}
</span>
  </li>
</ul>
</div>
      </div>
    </div>   
    
  );
};

export default InfoPeople;
