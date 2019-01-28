import React,{Component} from 'react';
import AOS from 'aos';

export default class BestRooms extends Component{

state={
    data:[{url:"./images/room1.jpg",
        deals:"Single Bed Room",
        price:"$119.96"
    },
        {
        url:"./images/room4.jpg",
        deals:"Double Small Room",
        price:"$97.44"
    },
    {   url:"./images/room3.jpg",
        deals:"Double Bed Luxury Room",
        price:"$65.76"}
    ]}
    


    render(){
        AOS.init();
        var response=this.state.data.map((index, i)=>{
            return(
            <div key={i} className="room-deal1 div" data-aos="zoom-in-down">

            <div className="room-deal-pic"> 
            <img src={index.url} alt=""/>
            </div>
            <h3>{index.deals} <span>{index.price}</span></h3>
            </div>)
        

        })
        return(<div className="rooms">
            <h1>Best Rooms</h1>
            <div className="verticle">
            </div>
            <div className="room-deals">
            {response}
                        </div>

        </div>)
    }
}