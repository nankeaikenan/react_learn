import React from "react";

let name = "nicai", num1 = 0, num2 = 2,arr = [1, 2, 3, 4, 5];

class App3 extends React.Component{
    render() {
        return (
            <div>
                <p>{name}</p>
                <p>num1和num2中比较大的一个数是: {num1 > num2 ? num1 : num2}</p>
                <ul>
                    {
                        arr.map((v, k) => {
                            return <li key={k}>{v}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export  default App3;