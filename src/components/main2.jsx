import React, {useState} from "react";
import Header from "./header";
import Input from "./input";
import Line from "./line";
import Category from "./category";
import "../App.css"


const Main2 = () => {

    const [value, setValue] = useState('')
    const [state, setToDo] = useState([])
    const [categories, setCategories] = useState([{value: 'Все', id: 0}])
    const [adder, setAdder] = useState(false)
    const [active, setActive] = useState('Все')

    let setCat = (e) => {
        setValue(e.target.value)
    }

    let addToCat = () => {
        if (value !== '') {
            addToCatCall({value, id: categories.length})
            setValue('')
        }
        setAdder(false)
    }

    let addToCatCall = (cat) => {
        setCategories(prevState => {
            debugger
            return [...prevState, cat]
        })
    }

    let addToDo = (post) => {
        setToDo(prevState => {
            return [...prevState, post]
        })
    }
    let updateToDo = (id, text) => {
        setToDo(prevState => {
            return [...prevState.map(i => {
                if (i.id === id) {
                    return {...i, toDo: text}
                }
                return i
            })
            ]
        })
    }

    let setActiveCat = (name) => {
        setActive(name)
    }

    let setAllCat = () => {
        setActive('Все')
    }

    let deleteToDo = (id) => {
        setToDo(prevState => {
            return [...prevState.filter(i => {
                return i.id !== id
            })]
        })
    }

    let deleteCategory = (name, id) => {
        if (name !== 'Все'){
            setCategories(prevState => {
                return [...prevState.filter(i => {
                    setToDo(prevState => {
                        return [...prevState.filter(i => {
                            return name !== i.category
                        })]
                    })
                    return i.id !== id
                })]
            })
        }
    }

    let allCat = categories.map(i => <Category active={active} delete={deleteCategory} id={categories.length}
                                               name={i.value}
                                               setActiveCat={setActiveCat} setAllCat={setAllCat}/>)
    let allToDo = state.map(i => {
        if (i.category === active || active === 'Все') {
            return <Line deleteToDo={deleteToDo} updateToDo={updateToDo} id={i.id} toDo={i.toDo}/>
        }
    })
    return (
        <div className="all">
            <div className="menu">
                <div className="all-cat">
                    {!adder &&
                    <div>
                        <span onClick={() => {
                            setAdder(true)
                        }}>Добавить новую категорию</span>
                    </div>
                    }
                    {adder &&
                    <input onChange={setCat} type="text" onMouseLeave={addToCat}/>
                    }
                    {allCat}
                </div>
            </div>
            <div className="main">
                <Header head={active}/>
                {allToDo}
                <Input activeCat={active} lastToDo={state.length} addToDo={addToDo}/>
            </div>
        </div>
    )
}

export default Main2