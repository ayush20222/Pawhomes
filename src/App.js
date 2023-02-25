import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Breeds from './Components/Breeds/Breeds'
import Adoption from './Components/Adoption/Adoption'

const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Breeds/>
        <Adoption/>
        <About/>
        <Experience/>
        <Footer/>


        </>
    )
}
export default App