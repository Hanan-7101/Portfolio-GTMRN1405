
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
<Routes>
  <Route  path='/'          element={<App/>} />
  <Route  path='/About'      element={<About/>}    />
  <Route  path='/Portfolio'      element={<Portfolio/>}    />
</Routes>
    
    </Router>
  
);


