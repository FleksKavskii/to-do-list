import React from "react"
import "../App.css"

const Category = (props) => {

    let setActiveCat = () => {
        if (props.name === 'Все') {
            props.setAllCat()
        }
        props.setActiveCat(props.name)
    }
    let setDeletedCat = () => {
        props.delete(props.name, props.id - 1)
    }

    return (
        <div className="cat-block">
            {props.active === props.name ?
                <div className='active'>
                    <div className='active-line'/>
                    <span className='cat-name' onWheel={setDeletedCat} onClick={setActiveCat}>{props.name}</span>
                </div>
                :
                <div className='non-active'>
                    <div className='non-active-line'/>
                    <span className='cat-name' onWheel={setDeletedCat} onClick={setActiveCat}>{props.name}</span>
                </div>
            }
        </div>
    )
}

export default Category