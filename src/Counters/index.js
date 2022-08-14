import "../App.css";

import image from "../img/27396.jpg";

const Index = () => {
  const handleClick = (e) => {
    console.log("hola");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title"> Desafio Rick And Morty </h1>
          <h2 className="title"> Realizado por: Sergio Calbiño </h2>
        

          <img src={image} alt="#" className="img-home" />
          <button className="btn-search">
            <a
              onClick={() => handleClick()}
              target="rel"
              href="http://localhost:3001/"
            >
              Ir al Desafio
            </a>
          </button>

          <div>
            <div></div>
          </div>
        </header>
      </div>
      
    </>
  );
};

export default Index;
