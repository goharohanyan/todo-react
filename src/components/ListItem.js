import React from "react";

export default class ListItem extends React.Component{
    
    state = {
        checked : false,
    }

    

    render() {
        return (<li>
        <input type="checkbox" checked={this.state.checked} onChange={this.onCheckboxChange}/>
        {this.props.toDoName.name}
        <button onClick={this.props.onBtnRemove}>X</button>
        </li>)
    }
}