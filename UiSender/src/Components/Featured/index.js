import React from "react";

import Carousel from "./Carousel";
import{Link} from 'react-router-dom'
import { Button } from "semantic-ui-react";
 

const Featured = () => {
  return (
    <div style={{ position: "relative"}}>

      <Carousel /> 
      <div className="logo_name"> 
        <div className="wrapper">
          Verizon MarketPlace
        </div>
      </div>
      <Button><Link to="/home">
      <div className="artist_name"> 
        <div className="wrapper">
          View All Venues
        </div>
      </div>
      </Link></Button>

<Button><Link to="/provider"><div className="left"> 
        <div className="wrapper">
          Add Venue
        </div>
      </div></Link></Button>
      

      
    </div>
  );
}

export default Featured;