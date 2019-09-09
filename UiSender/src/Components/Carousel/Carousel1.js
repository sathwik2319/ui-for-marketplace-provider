import React,{Component} from 'react'
import "./ImageCarousel.css";
import {Carousel} from '3d-react-carousal';


export default class CarouselSlider extends Component{
    render() {
        let slides = [
          <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />  ];
        return (
          <div className="container" >
            <Carousel slides={slides} className="container"/>
          </div>
        );
      }
   
}

/*
 componentDidMount()
    {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {edge: 'left',
            draggable: true,
            indicators:true,
            duration:100,
            fullWidth:true});
          });
        
        
          
    }

    render()
    {
        return(
            <div className="carousel carousel-slider center">
            <a className="carousel-item" href="#two!">
                <img className="img" src={require("C:/Users/Sathwik Yalamanchili/Desktop/marketplace/market-place-main-ui/src/Assets/apartment-architecture-ceiling-1035665.jpg")} alt="First"/>
            </a>
            <a className="carousel-item" href="#two!">
            <img className="img" src={require("C:/Users/Sathwik Yalamanchili/Desktop/marketplace/market-place-main-ui/src/Assets/auditorium-chairs-empty-2058009.jpg")} alt="Second"/>
            </a>
            <a className="carousel-item" href="#two!">
            <img className="img" src={require("C:/Users/Sathwik Yalamanchili/Desktop/marketplace/market-place-main-ui/src/Assets/bleachers-daylight-daytime-2413089.jpg")} alt="Third" />
            </a>
          </div>
        )
    }
*/