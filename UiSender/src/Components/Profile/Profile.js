import React,{Component} from 'react';
import CommonBar from '../Nav-Bar/Common-bar';

export default class Profile extends Component{
    render()
    {
        return(
            <div>
                <CommonBar></CommonBar>
                <h1>Profile Page
                </h1>
            </div>
        );
    }
}