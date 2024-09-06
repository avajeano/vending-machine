import React from "react";
import {Link} from "react-router-dom";
import "./item.css"

function Chip() {
    return (
        <div>
            <img className="item" src="https://m.media-amazon.com/images/I/81FVPKX1wTL._AC_UF894,1000_QL80_.jpg" alt="sunchips"/>
            <Link className="back" to="/">go back</Link>
        </div>
    )
}

export default Chip;