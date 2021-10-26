import React from "react";
import Task from "./Task";

// aqui é tipo um banco de dados pra pegar os objetos e mostrar

const Tasks = ({tasks, mudarfunçãoDatarefa,removerTarefa}) =>{
    return(
        <>
        {/* essa sintaxe é pra poder pegar os valores de cada task e exibilos */}
        {tasks.map((task) =>(
            <Task 
            key = {task.id}
            task= {task} 
            mudarfunçãoDatarefa={mudarfunçãoDatarefa}
            removerTarefa ={removerTarefa}/>))}

        </>

    )

};

export default Tasks;