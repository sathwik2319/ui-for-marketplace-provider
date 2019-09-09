import React,{Component} from 'react'
import NavBar2 from '../Nav-Bar/NavBar2';
import CardList from '../Cards/CardList';
import CarouselSlider from '../Carousel/Carousel1';


export default class Home extends Component{
    render()
    {
        return(
            <div>
                <NavBar2/>
            <CarouselSlider/>
                <CardList/>
            </div>
        );

    }
}