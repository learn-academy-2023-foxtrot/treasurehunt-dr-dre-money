import React, { useState } from "react"
import Square from "./components/Square.js"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const handleClick = (selectedIndex) => {
    return (
      alert(selectedIndex)
    )
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}

export default App
