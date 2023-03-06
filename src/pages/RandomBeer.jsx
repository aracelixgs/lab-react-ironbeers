import Navbars from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function RandomBeer() {

const [ randomBeer, setRandomBeer ] = useState([])

//console.log(randomBeer)
const randomNumber = Math.floor(Math.random()*randomBeer.length)
const randomOneBeer = randomBeer[randomNumber]

//console.log(randomNumber)
console.log(randomBeer)
//console.log(randomId)

useEffect(() => {
  getData();
}, []);

const getData = async () => {
  try {
    const getBeer = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    //console.log(randomBeer);
    setRandomBeer(getBeer.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <Navbars />
      <h1>RandomBeer</h1>

      <h1>Detalles de la cerveza</h1>

       <div>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h2>{randomBeer.name}</h2>
        <h2>{randomBeer.attenuation_level}</h2>
        <h4>{randomBeer.tagline}</h4>
        <h4>{randomBeer.first_brewed}</h4>
        <p>{randomBeer.description}</p>
        <h5>{randomBeer.contributed_by}</h5>
      </div> 
    </div>
  );
}

export default RandomBeer;
