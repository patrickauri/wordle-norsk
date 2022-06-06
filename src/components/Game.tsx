import React, { useEffect, useState } from "react"
import { Header } from "./Header"

interface GameKey {
  name: string
  keyCode?: string
}

export const Game = () => {
  const [currentRound, setCurrentRound] = useState(1)
  const [currentLetter, setCurrentLetter] = useState(0)
  const [maxRounds, setMaxRounds] = useState(6)
  const [currentWord, setCurrentWord] = useState("")
  const [rows, setRows] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
  }, [])

  const handleKeyPress = (key: KeyboardEvent) => {
    const regex = /[a-zæøåA-ZÆØÅ]/
    const result = regex.test(key.key) && key.key.length < 2
    if (result) {
      addGameInput(key.key)
    }
  }

  const addGameInput = (i: string) => {
    console.log(i)
  }

  const GameFrame = () => {
    // const rows = [
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    // ]

    return (
      <div className="game-frame">
        {rows.map((r) => (
          <div className="game-row">
            {r.map((l) => (
              <div className="game-letter">{l}</div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <React.Fragment>
      <Header />
      <div className="game-wrapper">
        <GameFrame />
        <GameKeyboard />
      </div>
    </React.Fragment>
  )
}

const WordBox = () => {}

const GameKeyboard = () => {
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "Æ"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ]

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-row">
        {keyboardKeys[0].map((e) => (
          <GameKey name={e} />
        ))}
      </div>
      <div className="keyboard-row">
        {keyboardKeys[1].map((e) => (
          <GameKey name={e} />
        ))}
      </div>
      <div className="keyboard-row">
        <div className="keyboard-key-base keyboard-key-special">ENTER</div>
        {keyboardKeys[2].map((e) => (
          <GameKey name={e} />
        ))}
        <div className="keyboard-key-base keyboard-key-special">BACKSPACE</div>
      </div>
    </div>
  )
}

const GameKey = (key: GameKey) => {
  return <div className="keyboard-key-base">{key.name}</div>
}
