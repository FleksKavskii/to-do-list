import React, {useState} from 'react'
import './../CSS/line.css'

const Line = (props) => {
    const [toggle, setToggle] = useState(false)
    const [x, setX] = useState(false)
    let text
    let updating = (e) => {
        text = e.target.value
        props.updateToDo(props.id, text)
    }
    let deleting = () => {
        props.deleteToDo(props.id)
    }
    let done = () => {
        setX(!x)
        console.log(props)
    }
    return (
        <div>
            {toggle &&
            <div className="to-do">
                <input type="text" onMouseLeave={() => {
                    setToggle(false)
                }} onChange={updating} value={props.toDo}/>
            </div>
            }
            {!toggle &&
            <div className="to-do">
                {x &&
                <div className="flex">
                    <input type="checkbox" checked={x} onChange={done}/>
                    <span className="strike" onWheel={deleting} onDoubleClick={() => {
                        setToggle(true)
                    }}>{props.toDo}</span>
                </div>
                }
                {!x &&
                <div className="flex">
                    <input type="checkbox" checked={x} onChange={done}/>
                    <span className="text" onWheel={deleting} onDoubleClick={() => {
                        setToggle(true)
                    }}>{props.toDo}</span>
                </div>
                }
            </div>
            }
        </div>
    )
}
export default Line