import React from "react";
import "./header.css";

const header= props => (
    <div className="header">
        <div className="title">
            {props.children}</div>
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
    </div>
);
export default header;