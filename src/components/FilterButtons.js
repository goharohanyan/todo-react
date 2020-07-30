import React from 'react';
import Button from '@material-ui/core/Button';


export default function FilterButtons(props) {

    return (
        <div>
            <Button  color="default" onClick={props.onAllBtnClick}>All</Button>                
            <Button  color="default" onClick={props.onActiveBtnClick}>Active</Button>
            <Button  color="default" onClick={props.onCompletedBtnClick}>Completed</Button>
        </div>
    )

}
