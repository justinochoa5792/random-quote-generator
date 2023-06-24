import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  let [newQuote, setNewQuote] = useState([]);

  const generateQuote = async () => {
    const response = await Axios.get("https://api.quotable.io/random");
    console.log(response.data);
    setNewQuote(response.data);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Quote of the Day</h3>
        <p>{newQuote.content}</p>
        <span>{newQuote.author}</span>
        <div className="button-container">
          <button onClick={generateQuote}>Generate Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
