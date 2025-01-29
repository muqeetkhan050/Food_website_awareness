import React from 'react';
import {useState, useEffect} from 'react';
const WasteCalculator=()=>{
    const [waste,setWaste]=useState(41.22);
    const [s,setS]=useState(0);

  useEffect(()=>{
    const count=setInterval(()=>{
        setS(s=>{
            if(s>59){
                setWaste(41.22);
                return 0;


            }
            setWaste(w=>w+41.22);
            return s+1;
        });
    },1000);
    return ()=>clearInterval(count)
  },[])


    return(
        <div className='container' style={{color:'white', fontFamily:'sans-serif', border:'1px solid black', borderRadius:'10px', backgroundColor:'#109d6c', display:'block'}}>          
        <div className='row' style={{paddingTop:'20px'}}>
        <div className='col-md-6'>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Second Counter</p>
        <p>{s} seconds</p>
        </div>
        <div className='col-md-6'>
            <p style={{fontSize:'20px', fontWeight:'bold'}}>Food wasted every second in tons</p>
        <p>{waste.toFixed(2)} Tons</p>
        </div>         
        </div>
        </div>
    
    )
        
}

export default WasteCalculator;