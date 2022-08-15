
 module.exports = {
    findChar: ( str, char ) =>  {
   let cantidad = 0;  
     for( let i = 0; i < str.length ; i++ ) {
           if( str[i].toLowerCase() === char ) {
               cantidad++	
           }
       }
     
   return cantidad
    },

 
    
    addLocation: (arra1, arra2) => {
      let respuesta = [];
  
      for (let i = 0; i < arra1.length; i++) {
        let obj = {
          name: arra1[i].name,
          episode: arra1[i].episode,
        };
        for (let j = 0; j < arra2.length; j++) {
          obj = {
            ...obj,
            locations: arra2[j],
          };
        }
        respuesta.push(obj);
      }
      return respuesta;
    },
}

