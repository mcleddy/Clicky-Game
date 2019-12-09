import React from "react";
import "./card.css";

const card = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.imge} />
        </div>
    </div>
);

export default card;