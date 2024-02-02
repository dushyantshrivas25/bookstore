import{Routes,Route, HashRouter} from 'react-router-dom'
import Home from '../pages/Home'
import React from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/footer'
import Notfound from '../Pages/Notfound/Notfound'
import { HashRouter } from 'react-router-dom'


export default function Router (){
    return(
        <HashRouter>
        <Nav/>
        <Routes>
            <Route path ='/' element={<Home/>} />
            <Route path ='*' element={<Notfound/>} />
        </Routes>
        <Footer/>
        </HashRouter>
    )
}