import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { DARK_THEME_STYLES, LIGHT_THEME_STYLES } from "../constants/style";

const divStyle = {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: '5px 10px',
};

export default class ListItem extends React.Component {

    render() {
        let checked = "checked";
        return (
            <ThemeContext.Consumer>
                {(themeName) => {
                    return (<div className={this.props.toDo.done ? checked : ""} style={divStyle}>
                        <input type="checkbox" checked={this.props.toDo.done} onChange={() => {
                            this.props.onCheckboxChange(this.props.toDo.id)
                        }
                        }/>
                        {this.props.toDo.name}
                        <button onClick={() => {
                            this.props.onBtnRemove(this.props.toDo.id)
                        }}>X
                        </button>
                    </div>)
                }}
            </ThemeContext.Consumer>)
    }
}
