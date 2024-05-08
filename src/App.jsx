import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Catalogo from './components/pages/Catalogo'
import { Container } from '@mui/material'
import Inbox from "@mui/icons-material/Home";
import User from "@mui/icons-material/Person";
import Article from "@mui/icons-material/Article";
import NavDrawer from './components/Navbar/Navbar'

const navLinks = [
  {
      title: "Inicio",
      path: "/",
      icon:<Inbox/>
  },
  {
      title: "Catalogo",
      path: "catalog",
      icon:<Article/>
  },
  {
      title: "Login",
      path: "login",
      icon:<User/>
  },
];


const App=()=> {
  

  return (
    <>
    <NavDrawer navLinks={navLinks}/>

    <Container>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/catalog' element={<Catalogo/>} />
    </Routes>
    </Container>

      </>
  )
}

export default App
