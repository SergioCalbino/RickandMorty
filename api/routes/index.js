"use strict";

const { findChar, agregoLocation } = require('../utils/find.js')

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

    const respuesta = [
        {
        excercise_name: 'Char counter',
        time: finalTime,
        in_time: isTrueOrFalse,
        results: [
            { char: 'l', count: findChar( locationName, 'l'  ), resource: 'location' },
            
            { char: 'c', count: findChar( charName, 'c' ), resource: 'character'},
            { char: 'e', count:  findChar ( episodeName, 'e' ), resource: 'episode'},
            
            
        ]
    }]

    // Comienza la segunda parte del ejercicio

    let inicioEj2 = performance.now();
    let promesas = [];

    const ej2 = respEpisode.data.map((e) => {
      let idChar = e.characters?.map((c) => parseInt(c.slice(42)));
      const locationCharacter = axios(urlCharacter + idChar);
      promesas.push(locationCharacter);
      return {
        name: e.name,
        episode: e.episode,
      };
    });

    const info = await Promise.all(promesas);
    const lugares = info.map((loc) =>
      loc.data
        .map((l) => l.origin.name)
        .reduce((ac, b) => {
          if (!ac.includes(b)) {
            ac.push(b);
          }
          return ac;
        }, [])
    );
    let agregoLocationsEpisodios = agregoLocation(ej2, lugares);
    let terminoEj2 = performance.now();
    let msEj2 = terminoEj2 - inicioEj2;
    let secEj2 = Math.floor((msEj2 / 1000) % 60);
    let restoMsEj2 = msEj2 - secEj2 * 1000;

    let resultEpisodeLocations = {
      exercise_name: "Episode locations",
      time: secEj2 + "s " + restoMsEj2 + "ms ",
      in_time: secEj2 < 3 ? true : false,

      results: agregoLocationsEpisodios,
    };


const respFinal = respuesta.concat(resultEpisodeLocations);
    
    
    
    res.send(  respFinal  )
    
    
} catch (error) {
    console.log(error);
}

});


