import './App.css';
import QuoteCard from './components/QuoteCard';
import { useState } from 'react';
import axios from 'axios';


function App() {
  
  
  const [card, setCard] = useState(exampleCard[0]);
  
  const getQuoteCard = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      .then((response) => response.data)
      .then((data)=> {
        console.log(data);
        setCard(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard card={card} />
      <button type="button" onClick={getQuoteCard}> Get another quotation </button>
    </div>
  );
}

const exampleCard = 
  [
    {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }
  ]


export default App;
