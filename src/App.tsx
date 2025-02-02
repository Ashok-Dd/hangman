import { useEffect, useState } from "react";
import words from "./words.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

const App = () => {
  
  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  } 
  const [wordToGuess, setWordToGuess] = useState(randomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = incorrectLetters.length >= 6; 

  const handleGuessedLetter = (letter: string) => {
    if (!guessedLetters.includes(letter) && !isWinner && !isLoser) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  };

  useEffect(() => {
    console.log("HEllo");
  },[])

  useEffect(() => {
    console.log('object');
    const handler = (e : KeyboardEvent) => {
      const key = e.key;
      console.log(e.key);
      if(key === "Enter") {
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(randomWord());
      }
      else{
        if(key.match(/^[a-z]$/)) {
          e.preventDefault();
          handleGuessedLetter(key);
        }
      }
    }
    document.addEventListener("keypress" , handler);

    return (() => {
      document.removeEventListener("keypress" , handler);
    })
  } , [guessedLetters])



  return (
    <div className="flex flex-col bg-sky-200 w-full gap-4 m-auto items-center h-screen  ">
      <div className="text-3xl w-full text-center uppercase text-red-500  p-1 font-bold">
        hangman game
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />

      {isWinner || isLoser ? (
        <>
          <div className="text-2xl">
            {isWinner ? (
              <>
                Congratulations! You won! The word is{" "}
                <span className="uppercase text-4xl font-bold text-white  ">
                  {wordToGuess}
                </span>
              </>
            ) : (
              <>
                Oops! You lost! The word was{" "}
                <span className="uppercase text-4xl font-bold text-red-500">
                  {wordToGuess}
                </span>
              </>
            )}
          </div>

          <button
            className="mt-4 bg-blue-500 text-white shadow-xl py-2 px-4 rounded-md text-xl font-bold hover:bg-blue-700"
            onClick={() => {
              setWordToGuess(words[Math.floor(Math.random() * words.length)]);
              setGuessedLetters([]);
            }}
          >
            Play Again 
          </button>
        </>
      ) : (
        <div className="w-full max-w-[60%] ">
          <Keyboard guessedLetters={guessedLetters} onGuess={handleGuessedLetter} />
        </div>
      )}
    </div>
  );
}

export default App;
