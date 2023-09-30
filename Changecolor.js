import React,{Component} from "react";
class Changecolor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"#ff0f0f"
        }
    }
    redHandler=()=>{
        this.state({color:'#ff0000'});
    }
    greenHandler=()=>{
        this.state({color:'#00ff00'});
    }
    blueHandler=()=>{
        this.state({color:'#0000ff'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Textcolor</h1>
                <button type="button"onClick={this.redHandler}>Red</button>&nbsp;&nbsp;
                <button type="button"onClick={this.greenHandler}>Green</button>&nbsp;&nbsp;
                <button type="button"onClick={this.blueHandler}>Blue</button>&nbsp;&nbsp;
            </div>
        );
    }
}
export default Changecolor;