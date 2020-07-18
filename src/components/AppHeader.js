import React from "react";

const headerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    padding: '5px 5px',

};

export default function AppHeader(props) {
    return (
        <header style={headerStyle}>
            <button style={{margin: 5}} onClick={()=> props.asd("light")}>Light</button>
            <button style={{margin: 5}} onClick={()=> props.asd("dark")}>Dark</button>
        </header>
    )
}
