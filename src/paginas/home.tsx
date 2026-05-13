
import { Link } from 'react-router-dom'
import '../style/style.css'
import { useNavigate } from "react-router-dom"
import Pagina_props from '../componentes/pagina_props';

function Home() {
    const navegador = useNavigate();


    function HandleClick() {
        navegador('/divisoes')
    }

    return (


        <div>
            <h1>seja bem vindo ao meu Home</h1>
            <br />
            <button onClick={HandleClick}>clique aqui</button>

            <Pagina_props 
            nome="João" 
            idade="25" 
            cidade="São Paulo" />


        </div>



    )
}

export default Home