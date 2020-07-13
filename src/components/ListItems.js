import React from "react";
import ListItem from "./ListItem";

export default function ListItems(props) {
    debugger;
    return (<ul>{props.toDoItems.map((el, index) => 
        <ListItem key={el.id} onBtnRemove={props.onBtnRemove} toDoName={el}
        onCheckboxChange={props.onCheckboxChange}/>)}</ul>)
}
