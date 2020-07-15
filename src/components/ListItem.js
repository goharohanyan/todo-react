import React from "react";
import ThemeContext from "../contexts/ThemeContext";

const liStyle = {
    color: "red", fontSize: 20
};

export default class ListItem extends React.Component {

    render() {
        let checked = "checked";
        return (
            <ThemeContext.Consumer>
                {(themeName) => {
                    return (<li className={this.props.toDo.done ? checked : ""} style={liStyle}>
                        <input type="checkbox" checked={this.props.toDo.done} onChange={() => {
                            this.props.onCheckboxChange(this.props.toDo.id)
                        }
                        }/>
                        {this.props.toDo.name}
                        <div>{themeName}</div>
                        <button onClick={() => {
                            this.props.onBtnRemove(this.props.toDo.id)
                        }}>X
                        </button>
                    </li>)
                }}
            </ThemeContext.Consumer>)
    }
}
