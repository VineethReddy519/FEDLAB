import React,{useState,useEffect} from 'react';
function Digi(){
    const[mytime,setTime]=useState("");
    const tick=()=>{
        let d=new Date();
        let hours=d.getHours();
        let minutes=d.getMinutes();
        let seconds=d.getSeconds();
        let time=`${hours>12?hours-12:hours}:${minutes}:${seconds}`
        if(hours<12){
            time=time+"am";
        }
        else{
            time=time+"pm"
        }
     setTime(time);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearTimeout(t);
        }
    },[mytime])
    return(
        <div>
            <h1>digital clock</h1>
            <h2>{mytime}</h2>
        </div>);
}
export default Digi;

