import React, { useEffect } from 'react'


const Navbar = ({color}) => {

      //case-1: Run on every render
  useEffect(() => {
    alert("Hi, I will run on every render");
  });

  //Case-2: Run only on first render
  useEffect(() => {
    alert("Hi, Welcome to the page: ");
  }, []);

  //Case-2: Run only when certain value changed.
  useEffect(() => {
    alert("Hi, I am running beacuase color value was changed")
  },[color])

  //Example of cleanup function, it means whenever the any component will be removed from this application this useEffect will run
  useEffect(() => {
    return()=>{
        alert("Component was deleted or unmounted")
    }
  }, [])


    return(
        <>
            <h2>Hi this is {color}</h2>
        </>
    )
}

export default Navbar
