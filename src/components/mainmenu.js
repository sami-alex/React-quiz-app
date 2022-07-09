import React from "react";
import { QuizContext } from '../app'
export default function Mainmenu(){
    const {setGameState}=React.useContext(QuizContext)
    function ChangeGameState(){
        setGameState('game')
    }
return(
<>
<h1>Kids Quiz App</h1>
<h1>Menu</h1>
<button onClick={ChangeGameState}>Start Game</button>

</>

)

}