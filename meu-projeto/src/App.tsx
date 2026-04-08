
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './paginas/home'
import Divisoes from './componentes/divisoes'
import Sobreitens from './paginas/sobreitens'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/divisoes' element={<Divisoes/>} />
        <Route path='/sobre/professores/:nomeprofessor/' element={<Sobreitens/>} /> 
      </Routes>


    </>
  )
}

export default App
