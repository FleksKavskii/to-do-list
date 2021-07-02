import React from "react";
import Header from "./header";
import Input from "./input";

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toDo: [],
        }
    }

    addToDo = (post) => {
        this.setState((prevState, prevProps) => {
            let toDo = [...prevState.toDo]
            toDo.push(post)
            return {
                toDo,
            }
        })
    }


    render() {
        return (
            <div className="main">
                <Header/>
                <Input lastToDo={this.state.toDo.length} addToDo={this.addToDo}/>
            </div>
        )
    }
}

export default Main