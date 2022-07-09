import React,{createContext,useContext} from 'react';
import Mainmenu from './components/mainmenu'
import EndGame from './components/endgame'
import Game from './components/game'
import questions from './components/questions';
export  const QuizContext=createContext();
function App() {
    const [gameState,setGameState]=React.useState('menu')
    const random=Math.floor(Math.random() * questions.length)
    const [questionNO,setQuestionNo]=React.useState(random)
    const [counter,setCounter]=React.useState(0)
    
        return(
            <QuizContext.Provider value={{gameState,setGameState,questionNO,setQuestionNo,counter,setCounter}}>
            <div style={{textAlign:'center'}}>
            {gameState==='menu'&&<Mainmenu/>}
            {gameState==='game'&&<Game/>}
            {gameState==='end'&&<EndGame/>}
            </div>
            </QuizContext.Provider>
        ) 
    
}

export default App;