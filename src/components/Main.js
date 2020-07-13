import React from 'react';
import ListItems from "./ListItems";
import ToDoHeader from "./ToDoHeader";
import uniqueId from "uniqid";

class Main extends React.Component{

    state = {
        inputValue: "",
        toDoItems: [{ done : false, name : "asd", id : uniqueId()}, {done: false, name :"dsa", id : uniqueId()}],
    };

    onBtnClick = () => {
        const newState = [...this.state.toDoItems];
        if(this.state.inputValue){
            newState.push({
                name : this.state.inputValue,
                done : false,
                id : uniqueId()
            });
        }
        this.setState({
            toDoItems : newState,
            inputValue : "",
        })
    };

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    onBtnRemove = (index) => {
        let uptadedArray = [...this.state.toDoItems];
        uptadedArray.splice(index, 1);
        this.setState({
            toDoItems : uptadedArray,
        })
    }

    onCheckboxChange = (event, id) => {
        debugger;
        let arr = [...this.state.toDoItems];
        arr[id].done = event.target.checked;
        this.setState({
            toDoItems : arr,
        })
    }


    render() {
        return (
            <div>
                <ToDoHeader inputValue={this.state.inputValue} onInputChange={this.onInputChange} onBtnClick={this.onBtnClick}/>
                <ListItems toDoItems={this.state.toDoItems} onBtnRemove={this.onBtnRemove} 
                    onCheckboxChange={this.onCheckboxChange}/>
            </div>
        );
    }
}



export default Main;
