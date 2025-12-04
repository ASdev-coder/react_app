import React, { useState } from 'react';
import Cover from './Cover';
import User from './User';

const First = () => {
    //cтан, ф-ці яка оновлює стан
    //при оновленні стану, оновлюється компонент 
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleClick = (msg) => {
        console.log(msg);
    }

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }
    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }

    const show = () => {
        setVisible(!visible);
    }

    return (

        <div>
            <h1>First</h1>
            <div>
                <button onClick={increment}>+</button>
                {count}
                <button onClick={decrement}>-</button>
            </div>
            <hr />
            <div>
                <button onClick={show}>Show</button>
                {visible && <div>Lorem ipsum dolor sit amet.</div>}
            </div>
            <Cover/>
            <hr />
            <User/>
        </div>
    );
}

export default First;
