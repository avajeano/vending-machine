import React from "react";
import {Link} from "react-router-dom";
import './VendingMachine.css';

function VendingMachine() {
    return (
        <div>
            <img className="vending-machine" src="https://i.pinimg.com/564x/b2/01/ed/b201ed68c00bc9f4f8c0807a7df02446.jpg" alt="vending machine"/>
                <div className="options">
                    <p>
                        <Link to="/chip">chip</Link>
                    </p>
                    <p>
                        <Link to="/candy">candy</Link>
                    </p>
                    <p>
                        <Link to="/soda">soda</Link>
                    </p>
                </div>
        </div>
    )
}

export default VendingMachine;