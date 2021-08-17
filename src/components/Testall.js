import React, { useState } from 'react'
import Auth from './auth'
const Testall = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')


    return (
        <div>
            <button onClick={Auth.apiRequest}>Test All</button>
        </div>
    )
}

export default Testall
