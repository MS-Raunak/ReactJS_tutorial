import React, { useState } from 'react'

function ChangeBackground() {
    const[bgcolor, setBgColor] = useState('red');
    
    let flag=true;

    const handleBackground = () => {
        if(flag){
            setBgColor('white');
            flag=false;
            // console.log("White");
        }
        else{
            setBgColor('red')
            flag=true;   
            // console.log('Red'); 
        }
        
    }
  return (
    <div>
      <button 
      style={{backgroundColor : bgcolor}}
      onClick={handleBackground}>
        Change Background</button>
    </div>
  )
}

export default ChangeBackground
