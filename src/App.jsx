import { useState } from "react"
import { Board } from "./components/Board"

function App() {
  const emptyBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ]

  const [board, setBoard] = useState(emptyBoard)
  const [player, setPlayer] = useState("X")
  const [gameResult, setGameResult] = useState(null)

  function getGameResult() {
    for (let i = 0; i < 3; i++) {
      if (board[i].every((square) => square === board[i][0] && square !== " "))
        return `${board[i][0]} won the game!`
    }

    for (let i = 0; i < 3; i++) {
      if (
        [board[0][i], board[1][i], board[2][i]].every(
          (square) => square === board[0][i] && square !== " "
        )
      ) {
        return `${board[0][i]} won the game!`
      }
    }

    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[2][2] !== " "
    ) {
      return `${board[0][0]} won the game!`
    }

    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[2][0] !== " "
    ) {
      return `${board[0][2]} won the game!`
    }

    if (board.every((row) => row.every((square) => square !== " ")))
      return "It's a tie!"

    return null
  }

  function startNewGame() {
    setBoard(emptyBoard)
    setPlayer("X")
    setGameResult(null)
  }

  function updateGame(row, col) {
    if (gameResult)
      return

    if (board[row][col] !== " ")
      return

    const newBoard = [...board]
    newBoard[row][col] = player
    setBoard(newBoard)

    setGameResult(getGameResult())

    setPlayer(player === "X" ? "O" : "X")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 select-none">Tic Tac Toe</h1>
      <Board board={board} updateGame={updateGame} />
      <span className="text-2xl font-bold mt-4 select-none">
        {gameResult ? gameResult : `It's ${player}'s turn`}
      </span>
      <button
        className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-md"
        onClick={startNewGame}
      >
        Start New Game
      </button>
    </div>
  )
}

export default App
