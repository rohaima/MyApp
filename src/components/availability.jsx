import React, {Component} from 'react';

export default class Availability extends Component{
    render(){
        return(<div>
            <div className="availability">
            <ul>
                <li><p>Check-In</p>
                <br/>
                
                <label>1/10</label>
                <input type="date"/></li>
                <li><p>Check-Out</p><br/>
                <label>1/10</label>

                <input type="date"/></li>
                <li><p>Guests</p><br/>
                
                <input type="number" name="" id=""/></li>
                <li className="check-availability"><p>Check Availability</p></li>
            </ul>
            </div>

        </div>)
    }
}