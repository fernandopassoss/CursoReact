import React from 'react'
import { PiTrashBold, PiCheckFatBold } from "react-icons/pi";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
      <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
              <div className='content'>
                <p>
                  {todo.text}
                </p>
                <p className="category">
                  ({todo.category})
                </p>
                <div className='botoes'>
                  <button className='complete' onClick={()=>completeTodo(todo.id)}>
                    Concluir Tarefa <PiCheckFatBold/>
                  </button>
                  <button className='remove' onClick={()=>removeTodo(todo.id)}>
                    <PiTrashBold/>
                  </button>
                </div>
              </div>    
            </div>

  )
}

export default Todo
