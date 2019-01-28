import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    state={
        navbar:[
            {
            to:"/",
            listItem:"Home"
        },
        {
            to:"/",
            listItem:"Features"
        },
        {
            to:"/testimonials",
            listItem:"Testimonials"
        },
        {
            to:"/blogs",
            listItem:"Blogs"
        },
        {
            to:"/contact",
            listItem:"Contact"
        }],

        headbar:[{
            class:"",
            icon:"fas fa-phone",
            info:"0900-000-5858"
        },
        {
            class:"middle-li",
            icon:"fas fa-map-marker-alt",
            info:"Street Address Here"
        },
        {
            class:"",
            icon:"fas fa-power-off",
            info:" Login/Register"
        },

    ]
    }
    render(){
        var response=this.state.navbar.map(
            (index,i)=>{
                return(
                    <li key={i}>
                    <Link to={index.to} className="link">{index.listItem}</Link>
                    </li>

                )
            }
        )

        var headbar=this.state.headbar.map(
     
            (index,i)=>{
                return(           <li key={i} className={index.class}>
                <i className={index.icon}></i> &nbsp; &nbsp;<p>{index.info}</p>
                </li>
        
                )}
        )
        
        return(<div className="nav">

            <div className="header-bar">
            <ul>
                {headbar}
            </ul>
            </div>
            <div className="menu-bar">
            <div className="logo"><img src="./images/logo.png"/></div>
            <ul>
                {response}
            </ul>
            </div>

        </div>)

    }
}
export default Nav;