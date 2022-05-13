
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
function App() {
  return (
    <Router>
     
      <Switch>
        <Route path='/Education' exact component= {Home} />
      </Switch>
    </Router>
      
    
  );
}

export default App;
