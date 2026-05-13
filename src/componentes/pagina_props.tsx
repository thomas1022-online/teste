type Props = {
    nome: string;
    idade: string;
    cidade: string;
}


function Pagina_props(props: Props){
    return(
        <>

        <div>
             <p>Nome: {props.nome}</p>
             <p>Idade: {props.idade}</p>
             <p>Cidade: {props.cidade}</p>
        </div>
        
        </>
    )
    
}

export default Pagina_props;