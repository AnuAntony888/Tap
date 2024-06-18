import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tapmainpage from './Tapmainpage';
import Tapresult from './Tapresult';


const Nvigate = () => {
  return (
    <Router>
      <div>
 
      </div>

      <Routes>
      <Route path="/" element={<Tapmainpage/>}></Route> 
      <Route path="/redirect" element={<Tapresult/>}></Route> 
      </Routes>
      </Router>
  )
}

export default Nvigate