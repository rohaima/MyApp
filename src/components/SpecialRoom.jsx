import React,{Component} from 'react';
import AOS from 'aos';

export default class SpecialOffer extends Component{
    
    render(){
        AOS.init();
        return(<div className="specialRoom">
        <div className="heading_text">
        <p>Special Summer Package</p>
        <h4> Starts from $19 per night Only</h4>
        
        <button>Book Now</button>
        </div>
        <div className="RoomOffer">
       
        <div className="aboutMain">
            <div className="image"  data-aos-offset="300" data-aos="fade-right"><img src="./images/room3.jpg" alt=""/></div>
            <div className="about_info" data-aos="fade-left">
                <h1>Special Summer Package</h1>
                <p style={{color:"black"}}>cdbudyvchv hukbev cdbudyvchv hukbevcdbudyvchv hukbevcdbudyvchv hukbev
                cdbudyvchv hukbev cdbudyvchv hukbev cdbudyvchv hukbev cdbudyvchv hukbev v cdbudyvchv hukbev
                
                </p>
                <button>cbjhe vb</button>
            </div>
        </div>

        </div>
       

        </div>)
    }

}