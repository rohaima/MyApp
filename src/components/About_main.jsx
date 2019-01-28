import React,{Component} from 'react';
import AOS from 'aos';
export default class AboutMain extends Component{
    render(){
        AOS.init();
        return(<div data-aos="fade-up">
            <div className="aboutMain">
           <div className="image">
            <img src="./images/bg-banner-box.jpg" alt=""/></div>
           <div className="about_info"> 
           <h1> Nanovi Luxury Hotel</h1>
           <p style={{color:"#222"}}> We are proud to say that since our opening in ’98 we have been serving our visitors in the best possible way. In Hotel Nanovi, where each one of our 17 rooms – with its own personality and style – will help you to feel at home and to live the “Nanovi experience” as you would never have imagined it. </p>
           <br/><br/><button>More About Us</button>
           </div></div>

        </div>);
    }
} 