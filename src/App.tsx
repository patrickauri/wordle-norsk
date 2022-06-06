import React, { useState } from "react"
import { Error } from "./components/Error"
import { Game } from "./components/Game"
import { Menu } from "./components/Menu"

enum GameStates {
  MENU,
  GAME,
}

export const App = () => {
  return <Game />
}
