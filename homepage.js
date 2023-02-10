import React, { useState } from "react";
import ReactDOM from "react-dom";
import "/src/styles.css";

function home(){
    return(
        <body>
            <nav align="right">
                <a href=""><button>login</button></a>
                <a href=""><button>signup</button></a>
            </nav>
            <h1 classname="title">title</h1>            
            <div>
                <p>
                    <h2>DESCRIPTION</h2>
                    some paragraph
                </p>
            </div>
        </body>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(home);
export default home;