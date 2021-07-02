import React, {useState} from 'react'
import '../CSS/input.css'
const Input = (props) => {
    const [value, setValue] = useState('')
    const [toggle, setToggle] = useState(false)

    let addToDO = () => {
        if (value !== ''){
            let newToDo = {
                id: props.lastToDo,
                toDo: value,
                category: props.activeCat
            }
            props.addToDo(newToDo)
            setToggle(false)
            setValue('')
        }
        setToggle(false)
    }
    let setToDo = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='input-all'>
            {!toggle &&
            <div className='input'>
                <span className='text-input' onDoubleClick={() => {setToggle(true)}}> + Добавить новое to-do</span>
            </div>
            }
            {toggle &&
            <div className='input'>
                <input type='text' value={value} onChange={setToDo} onMouseLeave={addToDO}/>
            </div>
            }
        </div>
    )
}
export default Input
