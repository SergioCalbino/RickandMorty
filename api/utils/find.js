
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

 idGenerator: (array, acumulador) => {
      for (let i = 0; i < array; i++) {
        acumulador.push(i + 1);
      }
    },


    inTime: (segundos) => {
      if (segundos < 3) return true;
      return false;
    },
    converTime: (inicio, fin) => {
      let ms = fin - inicio;
      let sec = Math.floor((ms / 1000) % 60);
      let restoMs = ms - sec * 1000;
      let rta = { sec, restoMs, in_time: sec < 3 ? true : false };
      return rta;
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

