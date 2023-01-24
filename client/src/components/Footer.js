import React from "react";
 
const Footer = () => {

    return (
        <div
        className="footer"
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "3%",
            margin: "0 auto",
            boxShadow: "2px 2px 2px 1px #000000",
            padding: "1%",
            position: "fixed",
            bottom: "0"
        }}
        >
            <p> &copy; Paragon 2023, Project ToDo List</p>
        </div>
    )
}

export default Footer