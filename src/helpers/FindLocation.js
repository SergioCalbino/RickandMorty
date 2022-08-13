import { useState } from "react";

const FindLocation = () => {
  
  const [count, setCount] = useState("");

  const arrayLocation = [];

  for (let i = 1; i < 127; i++) {
    arrayLocation.push(i);
  }

  const reqLocation = () => {
    fetch("https://rickandmortyapi.com/api/character/" + arrayLocation)
      .then((response) => response.json())
      .then((results) => setCount(results.map((ch) => ch.name).join("")));
  };

  const  letrasLocation = () => {
    let cantidad = 0;
    for (let i = 0; i < count.length; i++) {
      if (count[i].toLowerCase() === "l") {
        cantidad++;
      }
    }
    //  console.log({cantidad});
    return cantidad;
  }

  return {
    reqLocation,
    letrasLocation,
  };
};

export default FindLocation;