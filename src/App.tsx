import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import ListItem from './Components/ListItem/Index'
import AddArea from './Components/addArea/Index'



function App() {

  const [list, setList] = useState<Item[]>([

    {id: 1, name: 'Comprar o Pão', done: false},
    {id: 2, name: 'Comprar o Bolo', done: false},

  ])

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id:list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }
  

  return (
   <>
   <C.Container>
    <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

    <AddArea onEnter={handleAddTask} />

     {list.map((item,index)=>(
      <ListItem key={index} item={item} />
     ))}



    </C.Area>
   </C.Container>
   </>
  )
}

export default App
