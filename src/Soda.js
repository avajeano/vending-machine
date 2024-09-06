import React from "react";
import {Link} from "react-router-dom";
import "./item.css"


function Soda() {
    return (
        <div>
            <img className="item" src="https://m.media-amazon.com/images/I/71f5DwXAbZL.jpg" alt="sprite"/>
            <Link className="back" to="/">go back</Link>
        </div>
    )
}

export default Soda;