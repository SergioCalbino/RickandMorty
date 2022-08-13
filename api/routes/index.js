"use strict";

const { findChar } = require('../utils/find.js')

const express = require("express");
const axios = require("axios");

const router = express.Router();
module.exports = router;

const urlCharacter = "https://rickandmortyapi.com/api/character/";
const urlLocation = "https://rickandmortyapi.com/api/location/";
const urlEpisode = "https://rickandmortyapi.com/api/episode/";

// router.get('/', async (req, res) => {
//     res.send('Hola mundo')
// });

router.get("/", async (req, res) => {


  try {

    let inicio = performance.now();
    
    const arrayCharacter = [];
    for (let i = 1; i < 827; i++) {
        arrayCharacter.push(i);
    }
    const respChar = await axios(urlCharacter + arrayCharacter);
    
    const charName = respChar.data.map((ch) => ch.name).join("");
    
    
    
    const arrayEpisode = [];
    
    for (let i = 1; i < 51; i++) {
        arrayEpisode.push(i);
    }
    
    const respEpisode = await axios( urlEpisode + arrayEpisode )
    const episodeName = respEpisode.data.map((ch) => ch.name).join("")
    // res.json( episodeName.concat( charName ) )
    
    const arrayLocation = [];
    
    for (let i = 1; i < 127; i++) {
      arrayLocation.push(i);
    }
    
    const respLocation = await axios( urlLocation + arrayLocation )
    const locationName = respLocation.data.map((ch) => ch.name).join("")
    


    let final = performance.now();
    let ms = ( final - inicio )
    let sec = Math.floor((ms / 1000) % 60);
    let msf = ms - ( sec * 1000 )
    let finalTime =   ( sec + 's   ' + msf + 'ms  ');

    let isTrueOrFalse = ms < 3000 ? true : false

    // Comienza la segunda parte del ejercicio

    const infoEpisode =  await Promise.all( respEpisode.data.map((e) => {
       let idChar = e.characters?.map( c => parseInt( ( c.slice(42) ) ) )
       console.log(idChar)

        const locationCharacter =  axios(urlCharacter + idChar )
         console.log(locationCharacter.data)

        return {
            name: e.name,
            episode: e.episode,
           locations: locationCharacter.data?.map( loc => loc.origin.name ).reduce( (ac, b) =>{
            if( !ac.includes( b ) ) {
                 ac.push(b)
             
             }
             return ac
         
           },[] ) 

        }

   } ))

//    let arrPromise = [];
//    for (let i = 0; i < infoEpisode.length; i++) {
//     arrPromise.push( axios(urlCharacter + infoEpisode[i].characters) )
//     }

//     const resultPromise = Promise.all( arrPromise )

   




    const respuesta = 
        {
        excercise_name: 'Char counter',
        time: finalTime,
        in_time: isTrueOrFalse,
        results: [
            {char: 'l', count: findChar( locationName, 'l'  ), resource: 'location' },
            
            {char: 'c', count: findChar( charName, 'c' ), resource: 'character'},
            { char: 'e', count:  findChar ( episodeName, 'e' ), resource: 'episode'},
            { infoEpisode }
            
        ]
    }
    
        
        const respuesta2 = {
        excercise_name: 'Episode locations',
        time: finalTime,
        in_time: isTrueOrFalse,
        results: [
           {
            name: infoEpisode[0].name,

           }
            
        ]
    }

    
    
    res.send( [respuesta] )
    
    
} catch (error) {
    console.log(error);
}

});


