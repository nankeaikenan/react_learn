import React, {useState} from 'react';


const App3 = () => {
    const [num, setNum] = useState(0)
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>add</button>
        </div>
    );
};

export default App3;