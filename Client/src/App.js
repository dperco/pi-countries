import './components/styles/App.css';
import{ Route ,BrowserRouter} from 'react-router-dom';
import React from 'react';
import LandinPage from './components/LandinPage';
import Home from './components/Home';
import CrearActividades from './components/Actividades';
import Detail from './components/Detail';
// import Countries2 from './components/countri';

function App() {
  return (
    <BrowserRouter>
          <Route exact path="/" component={LandinPage}/>
          <Route  exact path="/home" component={Home}/>
          <Route exact path="/activity" component={CrearActividades}/> 
          <Route exact path="/home/:id" component={Detail}/>       
    </BrowserRouter>
  )
}

export default App;
