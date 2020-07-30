import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'


const GreenCheckbox = withStyles({
    root: {
      color: '272C34',
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const divStyle = {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: '5px 10px',
};

function ListItem(props) {

    let checked = "checked";
    return (<div className={props.toDo.done ? checked : ""} style={divStyle}>
        <GreenCheckbox checked={props.toDo.done} onChange={() => {
            props.onCheckboxChange(props.toDo.id)
        }} />
        {props.toDo.name}
        <IconButton aria-label="delete" onClick={() => props.onBtnRemove(props.toDo.id)}>
                <DeleteIcon />
        </IconButton> 
    </div>)

}

export default ListItem;
