import "../style/style.css"
import { Link } from "react-router-dom"

function Divisoes() {
    return (

        <div className="d_container">

            <div className="d_cores">
                <div className="div_roxo"></div>
                <div className="div_amarelo_escuro"></div>
                <div className="div_azul"></div>

            </div>

            <div className="div_container">

                <div className="div_princ1">
                    <div className="quadrado">

                        <div className="div_laranja"></div>
                        <div className="div_black"></div>
                    </div>

                </div>


                <div className="div_princ2">
                    <div className="quadrado">
                        <div className="bola_roxa"></div>
                    </div>
                </div>


                <div className="div_princ3">

                    <div className="quadrado">

                    </div>
                    
                </div>

            </div>
           <Link to='/'>Clique aqui</Link>
            
        </div>

    )
}

export default Divisoes