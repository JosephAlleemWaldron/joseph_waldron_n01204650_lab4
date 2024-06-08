import {useState} from 'react'

//useState - hook
//allows you to store the state of React component
//allows you to update the state of React component

//function-based component
const Counter = () => {

    //define the state (variable) to represent some value 
    //syntax : const [stateName, setStateName] = useState(initialValue)
    // setStateName is a method that should be used when you want to change the value of state
    const [count, setCount] = useState(10)

    //event for button click
    const incrementCounter = () => {
        //update the state by adding 1
        setCount(count + 1)
    }

    const decrementCounter = () => {
        //update the state by subtracting 1
        setCount(count - 1)
    }

    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={incrementCounter} >Increment Counter </button>
            <p>Count : {count} </p>
            <button onClick={decrementCounter} >Decrement Counter </button>
        </div>
    )
}

export default Counter