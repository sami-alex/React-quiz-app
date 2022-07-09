import React from "react";
import { QuizContext } from "../app";
import Questions from './questions'

export default function EndGame(){
    const {questionNO,setQuestionNo,counter,setCounter,setGameState}=React.useContext(QuizContext)

return(
<>
<h1>You have Scored {counter}/5</h1>
<button onClick={()=>{
    setGameState('menu')
    setCounter(0)
    setQuestionNo( Math.floor(Math.random() * Questions.length))
   

}}>End Game</button>
</>

)

}