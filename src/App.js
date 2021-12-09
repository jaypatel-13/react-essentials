import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"

import {Home, Events, Contact, Whoops404} from "./Pages";
// https://api.github.com/users/jaypatel-13

function App() {
  
    return (<div>
        <Routes >
        <Route path ="/" element={<Home />} />
        <Route path ="/events" element={<Events />}/>
        <Route path ="/contact" element={<Contact />}/>
        <Route path ="/*" element={<Whoops404 />}/>
        </Routes>
      </div>);
}

export default App;
