import { useState } from "react"
import { Board } from "./components/Board"

function App() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ])

  const [player, setPlayer] = useState("X")

  const updateGame = (row, col) => {
    if (board[row][col] !== " ")
      return

    const newBoard = [...board]
    newBoard[row][col] = player
    setBoard(newBoard)
    setPlayer(player === "X" ? "O" : "X")
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4 select-none'>Tic Tac Toe</h1>
      <Board board={board} updateGame={updateGame} />
    </div>
  )
}

export default App
