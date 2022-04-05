import React, {useState, useEffect} from 'react';

function App1() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    useEffect(() => {
        console.log("useEffect")
    }, [num, num1])
    // 这个hook检测离开组件
    useEffect(()=>{
        return ()=>{
            console.log('离开了App1组件')
        }
    }, [])
    const handAdd = () => {
        setNum(num + 2)
    }
    const handAdd1 = () => {
        setNum1(num1 + 1)
    }
    return (
        <div>
            <div>{num}</div>
            <button onClick={handAdd}>add</button>
            <div>{num1}</div>
            <button onClick={handAdd1}>add1</button>
        </div>
    );
}

export default App1;