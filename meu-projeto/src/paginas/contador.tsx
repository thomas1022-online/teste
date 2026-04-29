import { useState } from "react";

function Contador() {

const [numero,setNumero]= useState(10)

    // let numero: number = 10;

    function Handlesomar10(){
    setNumero(numero+10)

     

    }
    return (

        <>
            <div>
                <h1>Bem vindo a página de contagem
                    <br />
                    <br />
                    <br />
                    {numero}
                    <br />
                    <button onClick={Handlesomar10}>Somar 10 ao valor</button>
                </h1>

            </div>

        </>
    )
}

export default Contador