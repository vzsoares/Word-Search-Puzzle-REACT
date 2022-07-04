import { useState, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  // states

  const gridTest = [
    ["M", "Z", "U", "L", "I", "L", "A", "Z", "Q", "U", "L", "P", "A"],
    ["A", "P", "L", "U", "U", "A", "O", "V", "U", "E", "E", "Z", "B"],
    ["C", "X", "T", "R", "Z", "S", "K", "U", "Z", "Q", "U", "M", "A"],
    ["A", "Z", "V", "E", "R", "M", "E", "L", "H", "O", "D", "U", "C"],
    ["C", "U", "X", "E", "L", "L", "A", "O", "D", "S", "Z", "D", "A"],
    ["O", "L", "K", "U", "R", "Z", "O", "O", "D", "H", "K", "U", "T"],
    ["Z", "O", "Z", "S", "U", "D", "A", "L", "U", "Z", "A", "V", "E"],
    ["A", "A", "A", "L", "U", "L", "E", "L", "A", "M", "B", "D", "A"],
  ];
  const gridTestJson =
    '[["M","Z","U","L","I","L","A","Z","Q","U","L","P","A"],["A","P","L","U","U","A","O","V","U","E","E","Z","B"],["C","X","T","R","Z","S","K","U","Z","Q","U","M","A"],["A","Z","V","E","R","M","E","L","H","O","D","U","C"],["C","U","X","E","L","L","A","O","D","S","Z","D","A"],["O","L","K","U","R","Z","O","O","D","H","K","U","T"],["Z","O","Z","S","U","D","A","L","U","Z","A","V","E"],["A","A","A","L","U","L","E","L","A","M","B","D","A"]]';

  const [grid, setGrid] = useState([
    ["A", "Z", "U", "L", "X", "T", "E", "A", "Q", "U", "L", "P", "A"],
    ["P", "P", "L", "U", "U", "A", "O", "V", "U", "E", "E", "Z", "S"],
    ["D", "X", "T", "R", "Z", "S", "K", "U", "Z", "Q", "U", "M", "L"],
    ["R", "Z", "O", "V", "A", "G", "P", "L", "A", "L", "D", "U", "A"],
    ["L", "U", "X", "A", "L", "L", "A", "O", "D", "S", "Z", "D", "Z"],
    ["U", "L", "K", "U", "Z", "Z", "O", "O", "D", "H", "K", "U", "U"],
    ["Z", "O", "Z", "S", "U", "U", "A", "L", "U", "Z", "A", "V", "L"],
    ["A", "A", "A", "L", "U", "L", "Z", "L", "U", "S", "K", "D", "D"],
  ]);
  const [grid3, setGrid3] = useState([]);
  const [word, setWord] = useState("AZUL");
  const [showDirections, setShowDirections] = useState(false);
  const [showChangeGrid, setShowChangeGrid] = useState(false);
  const [resized, setResized] = useState(false);
  // direction switches
  const [findSul, setFindSul] = useState("true");
  const [findLeste, setFindLeste] = useState("true");
  const [findNorte, setFindNorte] = useState("");
  const [findOeste, setFindOeste] = useState("");
  const [findSudeste, setFindSudeste] = useState("true");
  const [findSudoeste, setFindSudoeste] = useState("");
  // const [findNordeste, setFindNordeste] = useState("")
  // const [findNoroeste, setFindNoroeste] = useState("")

  // get id's array function
  const findMatch = (word, grid) => {
    const result = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (findNorte) {
          if (aNorte(word, i, j, grid)) {
            result.push(aNorte(word, i, j, grid));
          }
        }
        if (findSul) {
          if (aSul(word, i, j, grid)) {
            result.push(aSul(word, i, j, grid));
          }
        }
        if (findLeste) {
          if (aLeste(word, i, j, grid)) {
            result.push(aLeste(word, i, j, grid));
          }
        }
        if (findOeste) {
          if (aOeste(word, i, j, grid)) {
            result.push(aOeste(word, i, j, grid));
          }
        }
        if (findSudoeste) {
          if (aSudoeste(word, i, j, grid)) {
            result.push(aSudoeste(word, i, j, grid));
          }
        }
        if (findSudeste) {
          if (aSudeste(word, i, j, grid)) {
            result.push(aSudeste(word, i, j, grid));
          }
        }
        if (findSudeste) {
          if (aNordeste(word, i, j, grid)) {
            result.push(aNordeste(word, i, j, grid));
          }
        }
        if (findSudoeste) {
          if (aNoroeste(word, i, j, grid)) {
            result.push(aNoroeste(word, i, j, grid));
          }
        }
      }
    }
    return result;
  };

  // sul
  const aSul = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i + x >= grid.length) {
        return false;
      }
      if (myWord[x] !== grid[i + x][j]) {
        return false;
      }
      response.push([i + x, j]);
    }

    return response;
  };

  // leste
  const aLeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (j + x >= grid[i].length) {
        return false;
      }
      if (myWord[x] !== grid[i][j + x]) {
        return false;
      }
      response.push([i, j + x]);
    }

    return response;
  };

  // oeste
  const aOeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (j - x < 0) {
        return false;
      }
      if (myWord[x] !== grid[i][j - x]) {
        return false;
      }
      response.push([i, j - x]);
    }

    return response;
  };

  // norte
  const aNorte = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i - x < 0) {
        return false;
      }
      if (myWord[x] !== grid[i - x][j]) {
        return false;
      }
      response.push([i - x, j]);
    }

    return response;
  };

  // sudeste
  const aSudeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i + x >= grid.length || j + x >= grid[i].length) {
        return false;
      }
      if (myWord[x] !== grid[i + x][j + x]) {
        return false;
      }
      response.push([i + x, j + x]);
    }

    return response;
  };

  // sudoeste
  const aSudoeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i + x >= grid.length || j - x < 0) {
        return false;
      }
      if (myWord[x] !== grid[i + x][j - x]) {
        return false;
      }
      response.push([i + x, j - x]);
    }

    return response;
  };

  // nordeste
  const aNordeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i - x < 0 || j + x >= grid[i].length) {
        return false;
      }
      if (i + x <= 0 || j + x <= 0) {
        return false;
      }
      if (myWord[x] !== grid[i - x][j + x]) {
        return false;
      }
      response.push([i - x, j + x]);
    }

    return response;
  };

  // noroeste
  const aNoroeste = (word, i, j, grid) => {
    const myWord = word.split("");
    const response = [];
    for (let x = 0; x < myWord.length; x++) {
      if (i - x < 0 || j - x < 0) {
        return false;
      }
      if (myWord[x] !== grid[i - x][j - x]) {
        return false;
      }
      response.push([i - x, j - x]);
    }

    return response;
  };

  //

  // Grid Content Component
  function GridContent() {
    const palavrasData = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        palavrasData.push([[i, j], grid[i][j]]);
      }
    }
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${grid.length},1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length},1fr)`,
        }}
      >
        {palavrasData.map((e) => {
          return (
            <div key={e[0]} id={e[0]}>
              {e[1]}
            </div>
          );
        })}
      </div>
    );
  }

  // change colors function
  const mudarCores = () => {
    const data = findMatch(word, grid);
    data.forEach((e) => {
      e.forEach((x) => {
        document.getElementById(`${x.toString()}`).style.backgroundColor =
          "orange";
      });
    });
  };
  // change colors UseEffect
  useEffect(() => {
    mudarCores();
  }, [
    word,
    findSudoeste,
    findSudeste,
    findOeste,
    findNorte,
    findLeste,
    findSul,
    grid3,
    grid,
    showDirections,
    showChangeGrid,
    resized,
  ]);
  // responsiveness useEffect
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 530 && window.innerWidth <= 590) {
        if (resized) {
          setResized(false);
        } else if (!resized) {
          setResized(true);
        }
      }
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // handle submit grid
  const submitGrid = (e) => {
    e.preventDefault();
    // const test = JSON.stringify(gridTest)
    // console.log(test)
    try {
      setGrid(JSON.parse(grid3));
    } catch (err) {
      alert("Wrong jsonString input");
    }
  };

  // handle show directionsDiv
  const showDirectionsDiv = () => {
    if (showDirections) {
      setShowDirections(false);
    } else if (!showDirections) {
      setShowDirections(true);
    }
  };

  // handle show changeGridDiv
  const handleShowChangeGrid = () => {
    // console.log(JSON.stringify(gridTest))
    if (showChangeGrid) {
      setShowChangeGrid(false);
    } else if (!showChangeGrid) {
      setShowChangeGrid(true);
    }
  };

  // styles
  const girdContainerStyle = {
    width: "80vw",
    maxWidth: "800px",
    height: "auto",
    border: "5px solid black",
    margin: "0 auto",
    marginBottom: "0.5rem",
  };

  const directionsContainerStyle = {
    gridTemplateColumns: `${
      window.innerWidth < 560 ? "1fr 1fr" : "1fr 1fr 1fr "
    }`,
    gridTemplateRows: `${window.innerWidth < 560 ? "1fr 1fr 1fr" : "1fr 1fr"}`,
    margin: "0 auto",
    width: "80vw",
    maxWidth: "500px",
    height: `${window.innerWidth < 560 ? "220px" : "150px"}`,
    border: "3px solid black",
    display: `${showDirections ? "grid" : "none"}`,
    marginBottom: "0.5rem",
    alignItems: "center",
  };

  const directionStyle = {
    display: "grid",
    gridTemplateColumns: `${window.innerWidth < 560 ? "1fr" : "1fr 1fr"}`,
    gridTemplateRows: `${window.innerWidth < 560 ? "1fr 1fr" : "1fr"}`,
    justifyContent: "space-between",
    justifyItems: "center",
    height: "50px",
    width: `${window.innerWidth < 560 ? "50px" : "150px"}`,
    margin: "0 auto",
    textAlign: "center",
    alignItems: "center",
  };
  const directionSelectStyle = { width: "60px", margin: "0", padding: "0" };
  const directionH5Style = { margin: "0" };

  const gridInputContainer = {
    display: `${showChangeGrid ? "" : "none"}`,
    border: "3px solid black",
    width: "250px",
    maxWidth: "80vw",
    margin: "0 auto",
    padding: "0.35rem",
    marginBottom: "0.5rem",
  };

  return (
    <>
      <main style={{ textAlign: "center", minHeight: "85vh" }}>
        {/* title */}
        <h1>Caça Palavras</h1>
        {/* grid Container */}
        <div className='palavras-container' style={girdContainerStyle}>
          <GridContent />
        </div>
        {/* palavra input */}
        <div className='palavra-input'>
          <input
            style={{ textAlign: "center" }}
            type='text'
            value={word}
            onChange={(e) => setWord(e.target.value.toUpperCase())}
          />
        </div>

        {/* show directions btn */}
        <div className='directions-btn' style={{ margin: "1rem" }}>
          <button onClick={() => showDirectionsDiv()}>Mudar Direções</button>
        </div>
        {/* show changeGrid btn */}
        <div className='change-grid-btn' style={{ marginBottom: "1rem" }}>
          <button onClick={() => handleShowChangeGrid()}>Mudar Grid</button>
        </div>
        {/* select directions div */}
        <div className='directions' style={directionsContainerStyle}>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>horizontal</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findLeste}
              onChange={(e) => setFindLeste(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>vertical</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findSul}
              onChange={(e) => setFindSul(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>diagonal</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findSudeste}
              onChange={(e) => setFindSudeste(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>vertical invertido</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findNorte}
              onChange={(e) => setFindNorte(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>horizontal invertido</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findOeste}
              onChange={(e) => setFindOeste(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
          {/* single direction */}
          <div className='direction' style={directionStyle}>
            <h5 style={directionH5Style}>diagonal invertido</h5>
            <select
              style={directionSelectStyle}
              name=''
              id=''
              value={findSudoeste}
              onChange={(e) => setFindSudoeste(e.target.value)}
            >
              <option value='true'>true</option>
              <option value=''>false</option>
            </select>
          </div>
        </div>
        {/* input GRID div */}
        <div className='grid-input' style={gridInputContainer}>
          <p style={{ margin: "0", marginBottom: "0.35rem" }}>
            Insira uma matriz JSON.stringify(array)
          </p>
          <form action=''>
            <input
              type='text'
              value={grid3}
              onChange={(e) => setGrid3(e.target.value)}
            />
            <input
              type='button'
              value={"submit"}
              onClick={(e) => submitGrid(e)}
            />
          </form>
          <button
            onClick={() =>
              window.prompt("Copy to clipboard: Ctrl+C, Enter", gridTestJson)
            }
            style={{ marginTop: "0.35rem" }}
          >
            example
          </button>
        </div>
      </main>
      {/* gitHub ref */}
      <div
        className='github'
        style={{
          textAlign: "center",
        }}
      >
        <a
          href='https://github.com/vzsoares'
          target='_blank'
          rel='noreferrer'
          className='github'
        >
          <FaGithubSquare style={{ color: "black", fontSize: "3rem" }} />
        </a>
      </div>
    </>
  );
}

export default App;
