
import { Link } from 'react-router-dom'
import '../style/style.css'

function Home() {
    return (

        <div>
        <h1>seja bem vindo ao meu Home</h1>
        <Link to='/divisoes'>Clique aqui</Link>
        </div>

        

    )
}

export default Home