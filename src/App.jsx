import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'

function App() {

  return (
    <>
    <AuthContextProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
      </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
