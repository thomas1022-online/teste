import Card from "../componentes/Card"




function Lista() {

    let lista = [
        'Banana',
        'Maçã',
        'Laranja',
        'Abacaxi',
        'Uva',
    ]

    function ClickButton() {
        alert('O nome selecionado é: ' + lista[0])

    }

    let jogos = [
        'CS:GO',
        'Valorant',
        'League of Legends',
        'Dota 2',
        'Fortnite',

    ]

    let ListaClientes = [
        { nome: 'thomas v', idade: '28', endereco: 'rua do senac' },
        { nome: 'bia', idade: '20', endereco: 'ao lado do senac' }
    ]


    let ListaCarros = [
        { descricao: 'gol 1.0', modelo: 'g3', ano: '2009', marca: 'Volkswagem', km: '40,00', imagem:'https://cdn.autopapo.com.br/box/uploads/2026/01/29104403/image-1-14.jpg'},
        { descricao: 'gol 1.0', modelo: 'g3', ano: '2009', marca: 'Volkswagem', km: '40,00', imagem:'https://www.portosenavios.com.br/images/220824-msc-cruzeiro-Seascape.jpg' },
        { descricao: 'gol 1.0', modelo: 'g3', ano: '2009', marca: 'Volkswagem', km: '40,00' },
        { descricao: 'gol 1.0', modelo: 'g3', ano: '2009', marca: 'Volkswagem', km: '40,00' }
    ]

    

    return (




       
        <>
    
        
        <br /><br />

            <h2>Meus Card</h2>

            <div className="list-cards"> {
                ListaCarros.map(
                    (item, chave) => (
                        <Card key={chave} dados={item} />
                    )
                )
            }


            </div>

            <div>
                O nome selecionado é: {lista[1]}
                <br />
                <button onClick={ClickButton}>clique aqui</button>
                <br />

                <h2>List com map</h2>
                {
                    lista.map(
                        (item, chaves) => (

                            <div key={chaves}>

                                o nome é item: {item}
                                <br />
                                A chave é: {chaves}
                                <br /><br />
                            </div>
                        )
                    )
                }

                {
                    jogos.map(
                        (item) => (
                            <ul>
                                <li>{item}</li>

                            </ul>

                        )
                    )
                }

                <h2>lista dos clientes</h2>
                {
                    ListaClientes.map(
                        (item, chave) => (
                            <div key={chave}>
                                meu nome é:{item.nome}
                                <br />
                                minha idade é {item.idade}
                            </div>
                        )
                    )
                }
            </div>

        </>
    )
}
export default Lista;

