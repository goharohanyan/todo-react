import React from 'react';
import ListItems from "./ListItems";
import ToDoHeader from "./ToDoHeader";
import uniqueId from "uniqid";
import AppHeader from "./AppHeader";
import ThemeContext from "../contexts/ThemeContext";
import { DARK_THEME_STYLES, LIGHT_THEME_STYLES } from '../constants/style';

const wrapperDivStyle = {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
class Main extends React.Component {

    state = {
        themeName: "dark",
        inputValue: "",
        toDoItems: [{done: false, name: "asd", id: uniqueId()}, {done: true, name: "dsa", id: uniqueId()}],
    };

    onBtnClick = () => {
        const newState = [...this.state.toDoItems];
        if (this.state.inputValue) {
            newState.push({
                name: this.state.inputValue,
                done: false,
                id: uniqueId()
            });
        }
        this.setState({
            toDoItems: newState,
            inputValue: "",
        })
    };

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    onBtnRemove = (id) => {
        let updatedArray = [...this.state.toDoItems];
        updatedArray.splice(updatedArray.findIndex((el) => el.id === id), 1);
        this.setState({
            toDoItems: updatedArray,
        })
    };

    onCheckboxChange = (id) => {
        let arr = [...this.state.toDoItems];
        const currentToDo = arr.find((el) => el.id === id);
        const currentToDoIndex = arr.indexOf(currentToDo);
        arr.splice(currentToDoIndex, 1, {
            ...currentToDo,
            done: !currentToDo.done
        });
        this.setState({
            toDoItems: arr,
        })
    };

    changeTheme = (value) => {
        this.setState({
            themeName: value
        })
    };

    render() {
        const themeStyle = this.state.themeName === 'dark' ? DARK_THEME_STYLES : LIGHT_THEME_STYLES;
        return (
            <ThemeContext.Provider value = {this.state.themeName}>
                <div style={{
                    ...wrapperDivStyle,
                    ...themeStyle,
                }}>
                    <AppHeader asd = {this.changeTheme}/>
                    <ToDoHeader inputValue={this.state.inputValue} onInputChange={this.onInputChange}
                                onBtnClick={this.onBtnClick}/>
                    <ListItems toDoItems={this.state.toDoItems} onBtnRemove={this.onBtnRemove}
                               onCheckboxChange={this.onCheckboxChange}/>
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default Main;
