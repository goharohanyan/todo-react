import React, {Component} from "react";

export default class ToDoHeader extends Component {
    render() {
        return (<div>
            <h2>This is To Do header</h2>
            <input type="text" value={this.props.inputValue} onChange={this.props.onInputChange}/>
            <button type="button" onClick={this.props.onBtnClick}>Add</button>
        </div>)
    }
}

