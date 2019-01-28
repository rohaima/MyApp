 import React,{Component} from 'react';
 import { Route } from 'react-router-dom';
 import Nav from './Nav';
 import Home from './Home';
 import Blogs from './Blogs';
 import Testimonials from './Testimonials';
 import ContactUs from './Contactus';
 import Contact from './Contact';
 import {data} from './data'

class App extends Component{
  state={
    data:data
  }

  render(){
    console.log(this.state.data)
 return (<div className="app">
<Nav/> 
<Route exact path="/" component={Home}/>
<Route path="/blogs" render={()=>{
  return(<Blogs blog={this.state.data.blog}/>)
}}/>
<Route path="/testimonials" component={Testimonials}/>
<Route path="/contact" render={()=>{return(<Contact cons={this.state.data.contacts}/>)}}/>
<ContactUs/>
 </div>)
}
}
export default App;











// class App extends Component{
//   // arr=[{name:"ahmad",age:20,education:"computer-science"},
//   // {name:"sohaib",age:21,education:"Fine arts"},
//   // {name:"hassan",age:22,education:"engeenering"}];  
//   render(){
//             let arr=[1,2,3,4,5];
// var response = arr.map((i)=>{
//   return <li key={i}>{i}</li>
// })
// //             var response = this.arr.map((i)=>{
// //               return          <ul key={i.age}>      
// //                <li>{i.name}                  </li>
// //                <li>{i.age}                  </li>
// //                <li>{i.education}                  </li>
// //                 <hr/>
// // </ul>            

// //            })
//             // var result=arr.map(function(i){
//             //   return                 <li key={i}>
//             //   {i}*2</li>
            
          
//             // })
//               return(<div className="app">
//               <div><ul>{response}</ul></div>

                
//                   </div>)

//    };
  
