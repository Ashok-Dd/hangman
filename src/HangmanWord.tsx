type GuessWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal: boolean;
  };
  
  export default function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal,
  }: GuessWordProps) {
    return (
      <div className="flex gap-2 sm:gap-1 text-7xl sm:text-5xl font-bold uppercase font-mono mb-10">
        {wordToGuess.split("").map((letter, index) => (
          <span className="border-b-5 border-black" key={index}>
            <span
              className={`${
                guessedLetters.includes(letter) || reveal ? "" : "invisible"
              } ${
                reveal && !guessedLetters.includes(letter) ? "text-red-500" : ""
              }`}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
  }
  