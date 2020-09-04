import React from 'react'
const navbarContainer=
{
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
}

export default function Navbar() {
    return (
        <div className="navbarContainer" style={navbarContainer}>
            Hello Navbar!
        </div>
    )
}
