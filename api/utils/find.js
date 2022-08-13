
module.exports = {
    findChar: ( str, char ) =>  {
   let cantidad = 0;  
     for( let i = 0; i < str.length ; i++ ) {
           if( str[i].toLowerCase() === char ) {
               cantidad++	
           }
       }
   console.log( cantidad )      
   return cantidad
// Necesito subi esta carpeta
}}
