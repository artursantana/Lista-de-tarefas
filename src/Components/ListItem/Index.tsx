
import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'




type Props = {
    item: Item
}


const Index = ({ item }: Props) => {


    const [ischecked, setIsChecked] = useState<boolean>(item.done);

    const handleCheckBoxChange = () => {
        setIsChecked(!ischecked)
    }
    console.log(handleCheckBoxChange)


  return (
    <C.Container done={ischecked}>
        <input type="checkbox" checked={ischecked} onChange={handleCheckBoxChange}/>
        <label>{item.done.toString()}</label>
    </C.Container>
  )
}

export default Index
