import { useState } from "react"

function Requisicoes() {

    const [produto, setProdutos] = useState([]);

    function BuscarProdutos() {


        fetch('https://fakestoreapi.com/products')
            .then((resposta) => {
                return resposta.json();

            })
            .then(
                (json) => {
                    setProdutos(json)
                }
            )
        console.log(produto)
    }



    return (
        <>
            <h1>pagina de Requisições usando fetch</h1>
            <button onClick={BuscarProdutos}>Carregar Produto</button>
            <br /><br />
            Quantidade de produto:{produto.length}
        </>
    )
}
export default Requisicoes