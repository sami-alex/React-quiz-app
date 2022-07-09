import React from "react";
import Questions from './questions'
import { QuizContext } from "../app";
import questions from "./questions";
import Images from './image'
export default function Game(){
    
   const {questionNO,setQuestionNo,counter,setCounter,setGameState}=React.useContext(QuizContext)
    const [answer,setAnswer]=React.useState('')
    const [buttonDisable,setButtonDisable]=React.useState(false)
   const [questionCounter,setQuestionCounter]=React.useState(0)
   
    function CheckAnswer(x){
        setAnswer(x)
       setButtonDisable(true)
     

    }
    
    function nextQuestion(){
       
       
        if(answer==Questions[questionNO].answer){
            setCounter(prevstate=>prevstate+1)
           }
           setQuestionCounter(prevstate=>prevstate+1)
           setQuestionNo(Math.floor(Math.random() * questions.length))
           setButtonDisable(false)

    }
    function lastQuestion(){
       
       
        if(answer==Questions[questionNO].answer){
            setCounter(prevstate=>prevstate+1)
           }
            setGameState('end')
           
           

    }
    
   
return(
<>


<Images/><br></br>
<button 
 onClick={()=>CheckAnswer('A')}
 style={{margin:20,width:100,height:50,backgroundColor:'GrayText',color:'white'}}
 disabled={buttonDisable}> A.{Questions[questionNO].OptionA} </button>

<button 
onClick={()=>CheckAnswer('B')}
style={{margin:20,width:100,height:50,backgroundColor:'GrayText',color:'white'}}
 disabled={buttonDisable }>B.{Questions[questionNO].OptionB}</button><br></br>

<button 
onClick={()=>CheckAnswer('C')}
style={{margin:20,width:100,height:50,backgroundColor:'GrayText',color:'white'}}
disabled={buttonDisable}>C.{Questions[questionNO].OptionC}
</button>

<button 
onClick={()=>CheckAnswer('D')} 
style={{margin:20,width:100,height:50,backgroundColor:'GrayText',color:'white'}}
disabled={buttonDisable}>D.{Questions[questionNO].OptionD}
</button><br></br>

{
       buttonDisable?(
        answer===Questions[questionNO].answer?(<h2 style={{color:'#50ff05'}}>you are correct</h2>):(<h2 style={{color:'red'}}>you are not correct the answer is {Questions[questionNO].answer}</h2>))
        :null

}
{   
    
    buttonDisable?questionCounter===4?(<button onClick={lastQuestion}> last question</button>):
    <button onClick={nextQuestion}> Next question</button>:null
    
}






</>

)

}