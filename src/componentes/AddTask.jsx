import React, { useState } from "react";
import './AddTask.css';
import Button from "./Button";

// so digitar sfc que ja faz a arquitetura basica de um bloco

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) =>{
        // essa função é para pegr os valores do input e tratar de alguma forma 
        console.log(e.target.value);
        setInputData(e.target.value)
    }

    const handleAddClick = () =>{
        handleTaskAddition(inputData);
        setInputData('');
    }

    return (  
        <div className ="add-task-container">
                        <input onChange ={handleInputChange} value={inputData} className="add-task-input" type="text"/>
                        <div className="add-task-button-container">
                        <Button onClick={handleAddClick}> Adicionar </Button>
                        </div>
                       
        </div>
    );
}
 
export default AddTask;