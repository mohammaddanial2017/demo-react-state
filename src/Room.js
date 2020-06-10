import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Room.css';

function Room() {
    // const state = useState(true);
    // console.log("State = ", state);
    // const isLit = state[0];
    // const setLit = state[1];

    const [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);

    // function updateLit() {
    //     console.log("Button Clicked!");
    //     // isLit = !isLit;
    //     setLit(!isLit);
    //     // setAge(++age);
    // }

    const dummyFunc = () => () => setLit(!isLit);

    // const increaseAge = () => {
    //     console.log("Button Clicked!");
    //     // isLit = !isLit;
    //     // setLit(!isLit);
    //     setAge(++age);
    // }

    return (
        <div className={`room ${isLit ? 'lit' : 'dark'}`}>
            This Room is {isLit ? 'lit' : 'dark'}
            <br />
            Age: {age}
            <br />
            {/* <button onClick={updateLit} >Toggle Light</button> */}
            {/* <button onClick={() => setLit(!isLit)} >Toggle Light</button> */}
            <button onClick={dummyFunc()} >Toggle Light</button>
            <br />
            <button onClick={() => {
                console.log("Increase age arrow function!");
                // isLit = !isLit;
                // setLit(!isLit);
                setAge(++age);
            }} >Increase Age</button>
        </div>
    );
}

export default Room;
