import React, { useEffect, useState } from "react"
import Tasks from "./componentes/Tasks";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css'
import AddTask from "./componentes/AddTask";
import Header from "./componentes/Header";
import TaskDetails from "./componentes/DetalhesTarefa";

const App = () =>{
  // let msg = "olhe só que dahora basta colocar entre chaves que a variavel é reconhecida"

  // esse useState é muito pica pois ele faz o aplicativo renderizado de novo sempre que o app é atualizado
  const[tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar React',
      completed: false,


    },
    {
      id:'2',
      title: 'Estudar para o Enem',
      completed: false,
    },
    {
      id:'3',
      title: 'Estudar REDAÇÃO',
      completed: true,
    }
  ]);

  useEffect(()=>{

    // ele executa esse bloco sempre que uma variavel muda 
    // console.log("task mudou");
    const funçãoPegarTasksAsynpranbugarapi = async () =>{
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
      // nesse set task aqui que vai atualizara listawwwwwww, quando tu aprender a criar api volteu aqui 
    }

    funçãoPegarTasksAsynpranbugarapi();
  }, [])
  //[tasks])

  // função pra pode mudar de false pra true
  const mudarfunçãoDatarefa = (taskId) =>{
    const newTasks = tasks.map((task)=>{
      if (task.id == taskId) return{...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks,{
        title: taskTitle,
        // npm install uuid pra poder instalar a biblioteca de adicionar ids
        // id: Math.random(20),
        id: uuidv4(),
        completed:false,
      },
    ];
    setTasks(newTasks);
  };


  // função de remover task
  const removerTarefa = (taskId) =>{
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks);
  };


  return(
    <Router>
    <div className='container'>
      {/* CARACA QUE MASSA SE LIGA NOS BLOQUINHO SENDO FEITO AAAAAAAA */}
        <Header/>


        {/* <AddTask handleTaskAddition= {handleTaskAddition}/>
        <Tasks tasks ={tasks} 
                  mudarfunçãoDatarefa={mudarfunçãoDatarefa} 
                  removerTarefa = {removerTarefa}
                  
                  /> */}

        
        {/* aqui eu vou usar o lance do router pra abrir uma nova pagina, sedo que perceba que é no msm app e no msm 
        html, mudando apenas a visibilidade dos bloquinhos pra visivel e invisivel. */}
        <Route path='/' exact render={()=>( 

          <>
          <AddTask handleTaskAddition= {handleTaskAddition}/>
          <Tasks tasks ={tasks} 
                  mudarfunçãoDatarefa={mudarfunçãoDatarefa} 
                  removerTarefa = {removerTarefa}
                  
                  />
          </>

        ) }/>
        {/* se liga que quando renderiza um componente tem que usar o component ao inves de render */}
        <Route path='/:taskTitle' exact component={TaskDetails}/>

    </div>
    </Router>
  )
}

export default App;