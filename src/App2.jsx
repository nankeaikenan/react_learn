import React, {useState, useEffect, createContext, useContext} from 'react';

const NumContext = createContext()

function Sub(){
    const {num, setNum} = useContext(NumContext)
    const handSubNum = () => {
        setNum(num + 1)
    }

    return (
        <h2>
            <span>i am sub:{num}</span>
            <button onClick={handSubNum}>subAdd</button>
        </h2>
    )
}

function Third(){
    return (
        <NumContext.Consumer>
            {
                ({num, setNum}) => {
                    const minuteNum = () => {
                        setNum(num - 1);
                    }
                    return (
                        <div>
                            <p>i am Third{num}</p>
                            <button onClick={minuteNum}>减少num</button>
                        </div>
                    )
                }
            }
        </NumContext.Consumer>
    )
}

function App2() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log("useEffect")
    }, [num])
    // 这个hook检测离开组件
    useEffect(()=>{
        return ()=>{
            console.log('离开了App1组件')
        }
    }, [])
    const handAdd = () => {
        setNum(num + 2)
    }
    return (
        <div>
            <div>{num}</div>
            <button onClick={handAdd}>add</button>
            <NumContext.Provider value={{num, setNum}}>
                <Sub/>
                <Third/>
            </NumContext.Provider>
        </div>
    );
}

export default App2;