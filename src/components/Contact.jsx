import React,{Component} from 'react'

import { data } from './data'
class Contact extends Component{
    

    render(){
        var b=this.props.cons;
        console.log(this.props)
        var contact= b.map((con,i)=>{
return(            <div className="contact-info" key={i}>
        <i class={con.contact.icon}></i>
        <br/>
        <h3>{con.contact.heading}</h3><br/>
        <p>{con.contact.mobile}</p>
        
        </div>
)
        })
        return(<div>

            <div className="Contact-main">
                <div className="embed-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.025395488297!2d74.38078741463168!3d31.550917652790925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190566b2d1463b%3A0xb8edd95e7d7bc2df!2sGovt+Tariq+High+School+Lahore+Cantt!5e0!3m2!1sen!2s!4v1547369730260"></iframe>
                </div>
                <div className="contact-information">
                {contact}          
                </div>
                <div className="contact-form"></div>
            </div>


        </div>);
    }
}
export default Contact;