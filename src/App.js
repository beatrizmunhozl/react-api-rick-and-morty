import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters/indexCharacter";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then((response) => response.json())    
    .then((response) => setCharacterList(response.results))
    
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < 42){
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  console.log(characterList)
  
  return (
    <div className="App">
      <Characters characterList={characterList} />
      <div className="div__btn">
        
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
        
      </div>

    </div>
  );
}

export default App;
