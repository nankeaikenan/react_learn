import React from 'react';

function Sub1(props) {
    const handAdd = () => {
        props.handAdd()
    }
    return (
        <div>
            <p>{props.num}</p>
            <button onClick={handAdd}>sub-add</button>
        </div>
    );
}

export default Sub1;