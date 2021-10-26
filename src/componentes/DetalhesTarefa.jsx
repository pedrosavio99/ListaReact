import React from 'react';
import { useHistory, useParams } from 'react-router';

import Button from './Button';
import './DetalhesTarefa.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const voltarProPainelprincipal = () =>{
        history.goBack();
    }


    console.log(params);

    return ( 
        <>
        
        <div className="back-button-container">
            <Button onClick={voltarProPainelprincipal}>Voltar</Button>

        </div>

        <div className="task-details-container">

            <h2>{params.taskTitle}</h2>
            <p>
                Texto qualquer
            </p>
        </div>
        
        
        </>
     );
}
 
export default TaskDetails;