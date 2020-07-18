import React from "react";
import ListItem from "./ListItem";

export default function ListItems(props) {
    return (<div style={{width:'100%'}}>{props.toDoItems.map((el, index) => 
        <ListItem key={el.id} onBtnRemove={props.onBtnRemove} toDo={el}
        onCheckboxChange={props.onCheckboxChange}/>)}</div>)
}
