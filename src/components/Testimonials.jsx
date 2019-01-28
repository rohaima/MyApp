import React,{Component} from 'react';
class Testimonials extends Component{
    render(){
return(<div className="testimonials">
<h1 className="heading">Testimonials</h1>
<div className="comments">
<div className="testimonials-title">
   
    <p>What our clients says about us</p>
</div>

<div className="testimonials-group">
    <div className="left-arrow">
    <i className="fa fa-chevron-left"></i>
    </div>
        <div className="testimonials-main">
            <div className="testimonials-item">
                <div className="image-circle">
                <img src="./images/t1.jpg"/>
                </div>
                <div className="testimonials-text">
                    <p style={{color:"#222"}}>Lorum ispum dolor sit amet, Lorum ispum dolor sit amet, 
    Lorum ispum dolor sit amet, Lorum ispum dolor sit ametLorum ispum dolor sit amet, Lorum ispum dolor sit amet, 
    Lorum ispum dolor sit amet, Lorum ispum dolor sit ametLorum ispum dolor sit amet, Lorum ispum dolor sit amet, 
    Lorum ispum dolor sit amet, Lorum ispum dolor sit amet</p>
                </div>
            </div>

        </div>
        <div className="right-arrow">
        <i className="fa fa-chevron-right"></i>
        </div>

</div>

<div className="testimonials-circle">
    <div className="circles-center">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
    </div>
</div>

</div>

</div>)

    }
}
export default Testimonials;