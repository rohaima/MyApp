import React,{Component} from 'react';

export default class Services extends Component{
    render(){

        const data=[{ heading:"Restaurant",
            para:"Chef Amari imaginatively crafts delicious dishes, from burgers and game to fine dining and traditional regional specialities. She sources fresh seasonal produce daily from local producers for our Hotel Restaurant",
            button:"read More"
        },
        { heading:"Cinema Gold",
        para:"Chef Amari imaginatively crafts delicious dishes, from burgers and game to fine dining and traditional regional specialities. She sources fresh seasonal produce daily from local producers for our Hotel Restaurant",
        button:"read More"
    },
    { heading:"Golf Ground",
    para:"Chef Amari imaginatively crafts delicious dishes, from burgers and game to fine dining and traditional regional specialities. She sources fresh seasonal produce daily from local producers for our Hotel Restaurant",
    button:"read More"
}]
const response= data.map((i, index)=>{
return <div className="service1" key={index}>
<h1>{i.heading}</h1>
<br/>
<p>{i.para}</p>
<button> {i.button} </button></div>

})

        return(<div>
            <div className="service">
            <div className="heading">
            <h1>Our Services</h1>
            <div className="verticle"></div></div>

            <div className="services">
            {response}          
            </div>
            
            </div>
        </div>)
    }
}