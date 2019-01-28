import React,{Component} from 'react';

 class Blogs extends Component{
    render(){
           var response=this.props.blog.map((index,i)=>{
        return(<div  className="blog" key={i}><img src={index.img}/>
        <div className="dateDiv">
        {index.dateDiv.date}
        </div>
        <h2>{index.heading}</h2><br/>
        <p> {index.para}
        </p>
        <br/>
        <button>{index.button}</button>
        </div>)
      })
        



        return(<div>
          <section className="Blogs">
              
            <div className="headings">
            <h1 style={{textAlign:"center"}}>Blogs</h1>
            </div>
            <div className="blogs">
            {response}
            
            
            </div>
              
              
              </section>  

        </div>)
    }
}
export default Blogs;