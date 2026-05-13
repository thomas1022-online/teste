
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './paginas/home'
import Divisoes from './componentes/divisoes'
import Sobreitens from './paginas/sobreitens'
import Contador from './paginas/contador'
import Negativo from './paginas/negativo'
import Lista from './paginas/lista'
import Requisicoes from './paginas/requisicoes'
import RequisicoesPost from './paginas/RequisicoesPost'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/divisoes' element={<Divisoes/>} />
        <Route path='/sobre/professores/:nomeprofessor/' element={<Sobreitens/>} /> 
        <Route path='/contador' element={<Contador/>} />
        <Route path='/negativo' element={<Negativo/>} />
        <Route path='/lista' element={<Lista/>} />
        <Route path='/requisicoes' element={<Requisicoes/>} />
        <Route path='/requisicoesPost' element={<RequisicoesPost/>} />
      </Routes>


    </>
  )
}

export default App
