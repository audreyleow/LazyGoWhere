import "./App.css";
import React from "react";

import axios from "axios";

function App() {
  const [cats, setCats] = React.useState([]);
  const [cat, setCat] = React.useState();

  React.useEffect(() => {
    axios.get("/cats").then((response) => {
      setCats(response.data);
    });

    axios.get("/cats/1").then((response) => {
      setCat(response.data.name);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>All cats: {JSON.stringify(cats)}</p>
        <p>Cat 1: {cat}</p>
      </header>
    </div>
  );
}

export default App;
