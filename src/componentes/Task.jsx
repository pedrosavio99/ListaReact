import React from 'react';
import './Task.css'

import {CgClose, CgInfo} from 'react-icons/cg'
// esse de baoxo é pra poder abrir novas paginas e o dom no final é por conta que é pra web se fosse android era sem 
import { useHistory } from 'react-router-dom';

// mermao aqui é tipo o objeto

const Task = ({task,mudarfunçãoDatarefa,removerTarefa}) => {
    const history = useHistory();

    const irProsDetalhesdaTask = ( ) => {
        history.push(`/${task.title}`)
        // caralkho meno isso são aspas especiais são dois acentos kkkkkkkkkk
    }

    // return ( <h1>{task.title}</h1> );
    // return<div className="task-container">{task.title}</div>
    // MUDAR A COR DA TAREFA CASO ESTEJA <COMCLUIDA></COMCLUIDA>
    return(
        <div className='task-container'
        style={task.completed ? {borderLeft: "6px solid chartreuse"}:{}}>
            <div className="task-title" onClick={() =>mudarfunçãoDatarefa(task.id)}>
                    {task.title}
            </div>

            <div className="buttons-container">
                <button className='remove-task-button' onClick={() =>removerTarefa(task.id)}>  <CgClose/>  </button>

        
                 <button className='see-task-button' onClick={irProsDetalhesdaTask}>  <CgInfo/>  </button>

            </div>
        </div>
    );
}

export default Task;