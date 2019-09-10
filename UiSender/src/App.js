import React from 'react';
import './App.css';
// import NavBar from './Components/Nav-Bar/NavBar';
// import NavBar2 from './Components/Nav-Bar/NavBar2';
// import Carousel from './Components/Carousel/Carousel';
// import CardList from './Components/Cards/CardList';
import {Switch,Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Provider from './Components/Provider';
import Checkout from './Components/Booking/Checkout';
import Featured from './Components/Featured';


export default class App extends React.Component {
  render()
  {
  return (
    <div >

      <Switch>
      <Route exact path='/' component={Featured}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/provider' component={Provider}></Route>
        <Route exact path='/checkout' component={Checkout}></Route>
      </Switch>
      
    
    </div>
  );
}
}

