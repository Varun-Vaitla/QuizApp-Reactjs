import React, { useState } from 'react';
import {data} from './data'


const Quiz = () => {
    let[index,setIndex]=useState(0);
    let [finish,setFinisg]=useState(false);
    let [score,setScore]=useState(0);
    let [option,setOption]=useState('');
    const correctOption = ['Option3', 'Option1', 'Option2', 'Option3', 'Option1', 'Option1', 'Option2', 'Option2', 'Option3', 'Option2'];

    const handleNext=()=>{
        if(correctOption[index]===option){
                setScore(score+1);
            }
        if(index<data.length-1)
        {
            
            setIndex(index+1);
            setOption('');
        }
        else{
            setFinisg(true);
        }
    }
    const handleSelect=(opt)=>{
        setOption(opt);
    }
    if(finish==true){
        return(
            <div className='scorePage'>
                <h1>Quize Finished</h1>
                <h3>your score is {score} of {data.length}</h3>

            </div>
        )
    }

  return (
    <div className='quizapp'>
        <h1>QuizApp</h1>
        <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'option1'? 'selected':''} 
            onClick={()=>handleSelect('Option1')}>{data[index].Option1}</li>

            <li className={option === 'option2'? 'selected':''} 
            onClick={()=>handleSelect('Option2')}>{data[index].Option2}</li>

            <li className={option === 'option3'? 'selected':''} 
            onClick={()=>handleSelect('Option3')}>{data[index].Option3}</li>

            <li className={option === 'option4'? 'selected':''} 
            onClick={()=>handleSelect('Option4')}>{data[index].Option4}</li>

        </ul>
        <button onClick={handleNext} disabled={!option}>Next</button>
        <h6>Question {index+1} out off {data.length}</h6>
    </div>
  )
}

export default Quiz