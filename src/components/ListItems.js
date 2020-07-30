import React from "react";
import ListItem from "./ListItem";
import { Box } from "@material-ui/core";

export default function ListItems(props) {
    
    return (<div style={{width:'100%'}}>{props.toDoItems.map(el => 
        <ListItem key={el.id} onBtnRemove={props.onBtnRemove} toDo={el}
        onCheckboxChange={props.onCheckboxChange}/>)}
        <Box border={1.5} margin='2%' color="#43A047" /> </div>)

}
