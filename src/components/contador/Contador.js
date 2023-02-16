import React, {useState} from 'react'

const Contador = (props) => {

    const [counter, setCounter] = useState(0)

    return(
        <>
            <div className='container'>
                <h2>{props.title}</h2>
                <h2>Contador</h2>
            </div>
            <div className='btn-container'>
                <button onClick={()=> setCounter(counter - 1)}> - 1 </button>
                <p style={{fontSize:35}}>{counter}</p>
                <button onClick={()=> setCounter(counter + 1)}> + 1 </button>
            </div>
        </>
    )
}

export default Contador