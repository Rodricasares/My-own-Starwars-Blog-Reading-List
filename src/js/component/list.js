import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";


const List =()=>{

const [data, setData]=useState([])

useEffect(()=>  {
    fetch("https://www.swapi.tech/api/planets/")
    .then(response => response.json())
    .then(data => setData({properties: data.results}))
            },[])

    return (
        <div>
<ul>
{
data.map((value, index)=>{
return <li key={index}>
<Link to={`/card/${value.uid}`}>{value.name}</ Link>
</li>
})

}

</ul>

        </div>
    )
}

export default List