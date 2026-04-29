import { useState } from "react"

function Negativo() {
    const [numero, setNumero] = useState(1000)

    function Handlesubtrair10() {
        setNumero(numero-10)

    }
    return (
        <>
            <div>
                <h2>ola mundo</h2>
                {numero}
                <button onClick={Handlesubtrair10}>clique aqui</button>
            </div>
        </>
    )
}
export default Negativo