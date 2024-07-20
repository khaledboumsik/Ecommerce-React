
import './App.css'
import { useEffect } from 'react'
import {BrowserRouter, Routes, Route,useLocation} from 'react-router-dom'
import Home from "./scenes/home/Home"
import ItemDetails from './scenes/itemDetails/ItemDetails'
import Checkout from './scenes/checkout/Checkout'
import Confirmation from './scenes/checkout/Confirmation'
import Navbar from './scenes/global/Navbar'
const ScrollToTop=()=>{
    const {pathname}=useLocation();
    useEffect(()=> {
        window.scrollTo(0,0)
    },pathname)
    return null;
}
function App() {
 return (<div className='app'>
    <BrowserRouter>
    <Navbar></Navbar>
    <ScrollToTop/>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/item/:itemId" element={<ItemDetails></ItemDetails>}></Route>
    <Route path="/checkout" element={<Checkout></Checkout>}></Route>
    <Route path="/checkout/success" element={<Confirmation></Confirmation>}></Route>
</BrowserRouter>
 </div>)
  
}

export default App
