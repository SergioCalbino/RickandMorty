import { useState } from "react";

const FindEpisode = () => {
  const [count, setCount] = useState("");
  const arrayEpisode = [];

  for (let i = 1; i < 51; i++) {
    arrayEpisode.push(i);
  }

  const reqEpisode = () => {
    fetch("https://rickandmortyapi.com/api/episode/" + arrayEpisode)
      .then((response) => response.json())
      .then((results) => setCount(results.map((ch) => ch.name).join("")));
  };

  function letrasEpisode() {
    let cantidad = 0;
    for (let i = 0; i < count.length; i++) {
      if (count[i].toLowerCase() === "e") {
        cantidad++;
      }
    }
    console.log(cantidad);
    return cantidad;
  }

  return {
    reqEpisode,
    letrasEpisode,
  };
};

export default FindEpisode;
