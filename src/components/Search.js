import React from'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#43A047',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#707070',
    },
  }})(TextField);


function Search(props) {

    return (<div>
            <CustomTextField label="Search..." onChange={props.onSearch} type="search" />
        </div>)
    
}

export default Search;