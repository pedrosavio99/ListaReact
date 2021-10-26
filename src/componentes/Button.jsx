import React from "react";
import './Button.css'
// so digitar sfc que ja faz a arquitetura basica de um bloco

const Button = ({children, onClick}) => {
    return ( 

        <button onClick={onClick} className='button'>
            {children}
        </button>


     );
}

{/* <Button>Adicionar</Button> */}
 
export default Button;