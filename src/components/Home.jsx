import React,{Component} from 'react';
import Header from './header';
import Availability from './availability';
import AboutMain from './About_main';
import BestRooms from './BestRooms';
import SpecialOffer from './SpecialRoom';
import Services from './Services';

export default class Home extends Component{
    render(){
        return(<div>


<Header/>
<Availability/>
<AboutMain/>
<BestRooms/>
<SpecialOffer/>
<Services/>

        </div>)
    }
}