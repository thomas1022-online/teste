import { useParams } from "react-router-dom"


function Sobreitens() {
    const pao = useParams();
    return (

        <>
        <h1>ola mundo</h1>
            {pao.nomeprofessor}
        </>
    )
}

export default Sobreitens