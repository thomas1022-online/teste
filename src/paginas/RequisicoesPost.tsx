// import Home from "./home";
// import type { Usuarios } from "../../types/usuarios"
// import { useState, type ChangeEvent } from "react";


// function RequisicoesPost() {

//     const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
//     const [loading, setLoading] = useState(false);

//     const [titulo, setTitulo] = useState('');
//     const [descricao, setDescricao] = useState('');

//     const carregarUsuarios = async () => {
//         setLoading(true)
//         let response =
//             await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let json = await response.json();

//         const dataArray = Array.isArray(json) ? json : (json)

//         setLoading(false);
//         setUsuarios(dataArray)

//         const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
//             setTitulo(e.target.value)
//         }

//         const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//             setDescricao(e.target.value)
//         }

//         const handleAddClick = async () => {
//             if  (titulo && descricao) {

//             }
//     }


// }

// return (
//     <div>
//         {loading &&
//             <div>Carregando conteúdo...</div>
//         }

//         {!loading &&
//             <div>
//                 <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
//                 <button onClick={carregarUsuarios}>
//                     Carregar Usuários
//                 </button>
//                 <br />
//                 Total de Usuarios:{usuarios.length}
//             </div>
//         }
//         <hr />
//         <div>
//             <h2>Adicionar novo Post</h2>
//             <br />
//             <input value={titulo} type="text"
//                 placeholder="Digite um Titulo"
//                 onChange={handleAddTitleChange} />
//             <br />

//             <textarea
//                 value={descricao}
//                 onChange={handleAddBodyChange}></textarea>
//             <br />
//             <button onClick={ }></button>

//         </div>

//     </div>

// )
// }

// export default RequisicoesPost;