import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbars from "../components/Navbar";

// IMPORTAR ESTILOS
import { Card } from "react-bootstrap";

function BeerDetails() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();
  //console.log(id)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const beerInfo = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
     // console.log(beerInfo);
      setBeer(beerInfo.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbars />

      <h1>Detalles de la cerveza</h1>

       <Card style={{ width: '25rem' }} key={beer._id}>
        <Card.Img variant="top" src={beer.image_url} alt={beer.name} />
        <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <h2>{beer.attenuation_level}</h2>
        <h4>{beer.tagline}</h4>
        <h4>{beer.first_brewed}</h4>
        <Card.Text>{beer.description}</Card.Text>
        <h5>{beer.contributed_by}</h5>
        </Card.Body>
      </Card> 
    </div>
  );
}

export default BeerDetails;
