import { useState } from "react";
import FindCharacter from "../helpers/FindCharacter";
import FindEpisode from "../helpers/FindEpisode";
import FindLocation from "../helpers/FindLocation";
import '../App.css'

const Index = () => {
  const { reqCharacter, letrasCharacter } = FindCharacter();
  const { reqLocation, letrasLocation } = FindLocation();
  const { reqEpisode, letrasEpisode } = FindEpisode();

  const [countCharacter, setCountCharacter] = useState();
  const [countLocation, setCountLocation] = useState();
  const [countEpisode, setCountEpisode] = useState();

  const clickCharacter = () => {
    setCountCharacter( letrasCharacter );
  };

  const clickLocation = () => {
    setCountLocation( letrasLocation );
  };

  const clickEpisode = () => {
    setCountEpisode( letrasEpisode );
  };

  return (
    <>
        <div className="App" > 
        <h1 className="title" > Desafio Rick And Morty </h1>     
        <div className="order">
     <button  className="btn-search" onClick={ reqCharacter }> character </button>
      <button  className="btn-search" onClick={ clickCharacter }> letrascharacter </button>

      <button onClick={ reqLocation }> location </button>
      <button onClick={ clickLocation }> letras location </button>

      <button onClick={ reqEpisode }> Episode </button>
      <button onClick={ clickEpisode }> letras Episode </button>

        
      <div> 
      
      {
        countCharacter ? JSON.stringify({ 
        char: 'c',
        count: countCharacter,
        resource: 'character'
        }) : null } 
        
        </div>
     
      <div> 
      { 
        countLocation ? JSON.stringify({
            char: 'l',
            count: countLocation,
            resource: 'location'
        }) : null
        
        } </div>
     
     
      <div> 
      { 
        countEpisode ? JSON.stringify({
            char: 'e',
            count: countEpisode,
            resource: 'episode'
        }) : null
        
        } </div>

      </div>
      </div>

    </>
  );
};

export default Index;
