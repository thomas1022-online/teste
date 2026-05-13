import "../style/style.css"
import { useNavigate } from "react-router-dom"

function Divisoes() {
    const navegagor = useNavigate();

    function Handvolta() {
        navegagor(-1)
    }

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
               <button onClick={Handvolta}>volta</button>

        </div>

    )
}

export default Divisoes