import { useState,KeyboardEvent } from 'react'
import * as C from './styles'


type Props = {
    onEnter: (taskName: string) => void
}


const Index = ({ onEnter }: Props) => {

    const [inputtext, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
            if(e.code == 'Enter' && inputtext !== ''){
                onEnter(inputtext)
                setInputText('')
            }
    }


  return (
    <C.Container>
        <div className='image'>+</div>
        <input 
        type="text" 
        placeholder='Add a task'
        value={inputtext}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}



        />
    </C.Container>
  )
}

export default Index
