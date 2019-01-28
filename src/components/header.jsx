import React,{Component} from 'react';
import AOS from 'aos';
export default class Header extends Component{
    slider=[{
        image:"./images/bg-slide12.jpg",
        para:"Welcome To",
        heading:"NaNoVi Hotel",
        button:"Book Now"
    },
        {
            image:"./images/bg-slide1.jpg",
            para:"Welcome To",
            heading:"NaNoVi Hotel Here",
            button:"Book Now"
        }];
    render(){
        AOS.init();
        var response= this.slider.map(function(index,i){
            return(<div className="header-slider1" key={i}>
            <img src={index.image}/>
          <div className="header-info">
            <p data-aos="fade-up">{index.para}</p>
            <h1 data-aos="fade-right"  data-aos-offset="150">{index.heading}</h1>
            <button data-aos="fade-down"  data-aos-offset="300">{index.button}</button>
            </div>
            </div>)
        })

return(<div>
    <div className="header section">
    {response}
    </div>
</div>)

    }

}