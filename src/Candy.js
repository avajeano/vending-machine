import React from "react";
import {Link} from "react-router-dom";
import "./item.css"

function Candy() {
    return (
        <div>
            <img className="item" src="https://www.starburst.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf621/files/migrate-product-files/v9gbknaa3ep5ubq5neos.png" alt="starburst candy"/>
            <Link className="back" to="/">go back</Link>
        </div>
    )
}

export default Candy;