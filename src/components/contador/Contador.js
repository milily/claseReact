import React, {useState} from 'react'

const Contador = (props) => {
    const [counter, setCounter] = useState(0)

    return(
        <div>
            <p>{props.title}</p>
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter+1)}> +1 </button>
        </div>
    )
}

export default Contador