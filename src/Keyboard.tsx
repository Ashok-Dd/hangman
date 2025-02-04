type KeyboardProps = {
    guessedLetters: string[];
    onGuess: (letter: string) => void;
  };
  
  export default function Keyboard({ guessedLetters, onGuess }: KeyboardProps) {
    const keys = "abcdefghijklmnopqrstuvwxyz".split("");
  
    return (
      <div className="flex w-full max-w-[80%] min-w-[60%] items-center justify-center flex-wrap gap-3">
        {keys.map((key) => (
          <button
            key={key}
            className={`shadow-xl sm:w-[50px] w-[40px] h-[40px]  rounded-md sm:h-[50px]  flex items-center justify-center font-bold capitalize text-2xl cursor-pointer ${
              guessedLetters.includes(key) ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300 text-white" : "bg-yellow-300 hover:bg-yellow-200"
            }`}
            onClick={() => onGuess(key)}
            disabled={guessedLetters.includes(key)}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
  