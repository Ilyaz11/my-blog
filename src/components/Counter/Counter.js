import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count => count + 1)}>Increase</button>
            <button onClick={() => setCount(count => count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;