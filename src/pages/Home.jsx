import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      <div>
        <Link to="/beers">Beers</Link>
        <p>Aquí puedes ver el listado de todas las cervezas</p>
      </div>
      
      <div>
      <Link to="/new-beer">Add New Beer</Link>
        <p>Aquí puedes añadir nuevas cervezas</p>
      </div>

      <div>
      <Link to="/random-beer">Random Beer</Link>
        <p>Aquí puedes ver una cerveza de forma aleatorias</p>
      </div>

    </div>
  )
}

export default Home