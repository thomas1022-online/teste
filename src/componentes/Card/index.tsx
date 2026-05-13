import '../../style/style.css'
type Props={
    dados:{
        descricao: string
        modelo: string
        ano: string
        marca: string
        km: string
        imagem?: string
        
    }
}


function Card({dados}:Props) {


    return (

        <div className='card-container'>

            <div className='card-img'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/pagani-huayra-bc-roadster-121-1564501509.jpg?crop=0.746xw:0.686xh;0.135xw,0.263xh&resize=1200:*"alt=""/>
         
            </div>

            <div className='card-detalhe'>
                Discrição {dados.descricao}
                <br /><br />
                Modelo: {dados.modelo}
                <br /><br />
                Ano: {dados.ano}
                <br /><br />s
                Marca:{dados.marca}
                <br /><br />
                Km: {dados.km}
            </div>
        </div>
    )

}

export default Card