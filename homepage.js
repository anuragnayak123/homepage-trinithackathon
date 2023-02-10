import React, { useState } from "react";
import ReactDOM from "react-dom";

function home(){
    return(
        <body>
            <nav>
                home
                <a href=""><button>login</button></a>
                <a href=""><button>signup</button></a>
            </nav>
            <h1>title</h1>
            <iframe src="https://giphy.com/embed/26gs9jTY1R02ueEnu" width="480" height="480" frameBorder="0" class="giphy-embed"></iframe>
            <div>
                <h2>DESCRIPTION</h2>
                <div>
                    some paragraph
                </div>
            </div>
        </body>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(home);
export default home;