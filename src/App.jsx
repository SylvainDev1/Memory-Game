import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/images/Ace4.jpg", matched: false },
  { src: "/images/Cat4.jpg", matched: false },
  { src: "/images/Beach4.jpg", matched: false },
  { src: "/images/Can4.jpg", matched: false },
  { src: "/images/Lion4.jpg", matched: false },
  { src: "/images/LasVegas4.jpg", matched: false },
  { src: "/images/Watch4.jpg", matched: false },
  { src: "/images/Watermatch4.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setGameCompleted(false);
  };

  //Make choice for cards
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceTwo]);

  //check if Game Completed
  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      return setGameCompleted(true);
    } else {
      setGameCompleted(false);
    }
  }, [choiceTwo]);
  // console.log(`completed: ${gameCompleted}`);

  //reset choice and increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start game on load
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div>
        <button onClick={shuffleCards}>Start New Game</button>
        Turns: {turns}
      </div>

      <h2 className={gameCompleted ? "Win" : ""}> WELL DONE !!!</h2>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
