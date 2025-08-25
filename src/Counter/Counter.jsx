import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }

    const Increment = () => {
        setCount(count + 1);
    }

    return (
        <div className="count-container">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={Decrement}>Decrement</button>
            <button className="count-button" onClick={Reset}>Reset</button>
            <button className="count-button" onClick={Increment}>Increment</button>
        </div>
    )

}
export default Counter;