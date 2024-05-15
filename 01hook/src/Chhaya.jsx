import { useEffect, useState } from 'react';
import './Chhaya.css'

function Chhaya(){

    let ms = "Let's see, who won?"
    let random = 0;
    let href = 'link'
    let res = "Lets Start!"

    let [msg, setMessage] = useState(ms)
    let [count, setCount] = useState(random)
    let [link, SetLink]   = useState(href)
    let [result, setResult] = useState(res)

    useEffect(() => {
        alert(result)
    }, [result])

    let game = () => {
        random = Math.floor(Math.random()*10 + 1)
        count = random;
        setCount(count)
         //console.log(random)

        if(random % 2 == 0){
            msg = "Chhaya --> Play Baby Shark"
            link = "https://youtu.be/020g-0hhCAU";
            result = "Chhaya Won!"
            setMessage(msg)
            SetLink(link)
            setResult(result)
        }
        else {
            msg = "Mummy --> Play Tarak Mehta"
            link = "https://youtu.be/P-0K92p0cbk";
            result = "Mummy Won!"
            setMessage(msg)
            SetLink(link)
            setResult(result)
        }
    }

    return(
        <>
            <h1>Chhammy Game</h1>
            <a href={link}><h2>{msg}</h2></a> 
        
            <button onClick={game}>{result}</button>
           <strong>{count}</strong> 
        </>
    )
}

export default Chhaya;