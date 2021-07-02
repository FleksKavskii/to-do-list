import React from "react";
import './../CSS/header.css'

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <div className="to-do-header">{props.head}</div>
            </div>
        </div>
    )
}
export default Header