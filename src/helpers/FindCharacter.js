import { useState } from "react";




const FindCharacter = () => {
  
    const [count, setCount] = useState('')
    const arrayCharacter = [];
    
    for (let i = 1; i < 827; i++) {
        arrayCharacter.push(i)
       }
    
    const reqCharacter =  () => {
        fetch('https://rickandmortyapi.com/api/character/' + arrayCharacter)
        .then( response => response.json() )
        .then( results => setCount( results.map( ch => ch.name).join('')  ))
        
    }
    
    function letrasCharacter() {
        let cantidad = 0;  
          for(let i=0; i<count.length ; i++) {
                if(count[i].toLowerCase() === 'c') {
                    cantidad++	
                }
            }
        console.log(cantidad)      
        return cantidad
    
    }
    return {
        reqCharacter,
        letrasCharacter
    }
}

export default FindCharacter
