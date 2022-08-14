import { useState } from "react";
import FindCharacter from "../helpers/FindCharacter";
import FindEpisode from "../helpers/FindEpisode";
import FindLocation from "../helpers/FindLocation";
import '../App.css'
import { fetchBack } from "../helpers/fetchBack";

const Index = () => {

  // const { reqCharacter, letrasCharacter } = FindCharacter();
  // const { reqLocation, letrasLocation } = FindLocation();
  // const { reqEpisode, letrasEpisode } = FindEpisode();
  // const { requestFetch } = fetchBack();

  // const [countCharacter, setCountCharacter] = useState();
  // const [countLocation, setCountLocation] = useState();
  // const [countEpisode, setCountEpisode] = useState();
  

  // const clickCharacter = () => {
  //   setCountCharacter( letrasCharacter );
  // };

  // const clickLocation = () => {
  //   setCountLocation( letrasLocation );
  // };

  // const clickEpisode = () => {
  //   setCountEpisode( letrasEpisode );
  // };

  const handleClick = (e) => {
    e.preventDefault()
    console.log('hola')
    
   
  }

  

  return (
    <>
        {/* <div className="App" > 
        <h1 className="title" > Desafio Rick And Morty </h1>     
        <div className="order">
     <button  className="btn-search" onClick={ reqCharacter }> character </button>
      <button  className="btn-search" onClick={ clickCharacter }> letrascharacter </button> */}

     
     <a onClick={() => handleClick() } target="_blank" href='http://localhost:3001/'  >
      Click me
    

     </a>

     
     

        
      <div> 

      <div>
        
      </div>
      
     </div>

      {/* </div>
      </div> */}

    </>
  );
};

export default Index;
