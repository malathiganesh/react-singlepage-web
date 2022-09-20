import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import Products from './components/product/product';
import Login from './components/login/login';
import imga from './components/images/briyani.jpg';
import imgb from './components/images/friedrice.jpg';
import imgc from './components/images/piza.jpg';
import imgd from './components/images/grill.jpg';

import Body from './components/body/body';
import * as React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Discription from './components/description';
import {Foodcontext} from './components/contex/contex';

function App() {
  const images = [imga,imgb,imgc,imgd];
  const [isLoggedin, setLoggedIn] = useState('false');
  const loginHandler = (a) => {
    setLoggedIn(a);
  }
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('login'))
    fetch('https://6315e15733e540a6d386e913.mockapi.io/swiggy/swiggy').then((response) => {
      return response.json()

    }).then((data) => {
      data.forEach((dat, i) => {
        dat.image = images[i % images.length]
      })
      setItems([...data])
    })
  }, []);
  return (
    <div className="App">
        {/* <Header></Header> */}
        <Foodcontext.Provider value={{isLoggedin,setLoggedIn}}>
        <Routes>
            <Route index element={<Header></Header>}></Route>
            <Route path="/logout"  element={<Login isLoggedin={loginHandler}/>}/>
            <Route path="header" element={<Header></Header>}>
            
            <Route path='logout1' element={ <Products logout={loginHandler} />} />
          </Route>
            {/* <Route path="/headers"element={<Body input={items}></Body>}/> */}
            <Route path="/body" element={<Body input={items}></Body>}/>
            <Route path='discription/:id' element={<Discription/>}/>
        </Routes>
        </Foodcontext.Provider>
        {/* <Discription/> */}
        <Footer />
        
      {/* <Header></Header>
      <div className='container'>
        {isLoggedin == 'true' ? <Products logout={loginHandler} /> : <Login isLoggedin={loginHandler} />}
      </div>
      <Body input={items}></Body> */}
    </div>

  );
}

export default App;