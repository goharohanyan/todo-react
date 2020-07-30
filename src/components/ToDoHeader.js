import React from "react";
import { Button, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#43A047',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#707070',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#707070',
        },
        '&:hover fieldset': {
          borderColor: '#707070',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#707070',
        },
      },
    },
  })(TextField);

const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%'

};

const inputAreaStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%'

};

function ToDoHeader(props) {
    
    return (<div style={headerStyle}>
                <Typography variant='h3' > My todo list</Typography>
                <div style={inputAreaStyle}>
                    <CssTextField type='text' variant='outlined' styl={{borderColor: 'green'}} label='What shoud I do...' value={props.inputValue} 
                                onChange={props.onInputChange} onKeyPress={(event) => {
                                                                    if(event.key === 'Enter'){
                                                                        props.onEnterPress()
                                                                    }    
                                                                }}  />
                    
                    <Button onClick={props.onBtnClick} >Add</Button>
            </div>       
        </div>)
    
}

export default ToDoHeader;

