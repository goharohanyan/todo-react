import React from "react";

const headerStyle = {
    display: "flex",
    justifyContent: "flex-end"
};

export default function AppHeader(props) {
    return (
        <header style={headerStyle}>
            <button onClick={()=> props.asd("light")}>Light</button>
            <button onClick={()=> props.asd("dark")}>Dark</button>
        </header>
    )
}
