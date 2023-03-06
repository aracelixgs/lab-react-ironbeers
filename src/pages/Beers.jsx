import { useState } from "react";
import Navbars from "../components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom"

// ESTILOS
import { Card } from "react-bootstrap";


function Beers() {

const [ allBeers, setAllBeers ] = useState([])

useEffect(() => {

getData()

}, [])


const getData = async() => {
try {
  const beersInfo = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
  //console.log(beersInfo)
  setAllBeers(beersInfo.data)

} catch(error) {
  console.log(error)
}
}


  return (
    <div>
      <Navbars />

      <h1>All Beers</h1>

      

    {allBeers.map((eachBeer) => {
      return (

        <Link to={`/beers/${eachBeer._id}`}>
        <Card style={{ width: '18rem' }} key={eachBeer._id}>
          <Card.Img variant="left" src={eachBeer.image_url} alt={eachBeer.name} width="100px" />
          <Card.Body>
          <Card.Title>{eachBeer.name}</Card.Title>
          <h3>{eachBeer.tagline}</h3>
          <h5>Created by: {eachBeer.contributed_by}</h5>
          </Card.Body>
         
        </Card>
        </Link>
      )
    })}

      
    </div>
  );
}

export default Beers;
