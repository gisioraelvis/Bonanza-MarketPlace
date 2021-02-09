import { useState } from "react"
import {Col} from 'react-bootstrap'

const CodepenScreen = () => {
    const[counter, setCounter] = useState(0)

    return (
        <div>
            <Col>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter +1)}>Click</button>
            </Col>
            
        </div>
    )
}

export default CodepenScreen

