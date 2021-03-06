import React, { useState } from 'react'
import axios from 'axios'

export const hello = () => {
    console.log('hello')
    // apiRequest()
}

const Oscarpatients = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.registerCallback(apiRequest)
    async function apiRequest() {
        // e.preventDefault()
        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscar/patients`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res.data)
                    setData(res.data)
                }
            })
            .catch(err => {
                setError(err)
            })
    }
    return (
        <div>
            {/* <form> */}

            <table>
                <tr>
                    <td><b><span>GET:   </span> /api/v1/oscar/patients</b></td>
                    <td><button id="oscarpatient" onClick={apiRequest}>Test</button></td>
                </tr>
            </table>
            {data ? [data].map(e =>

                <p className="success">{JSON.stringify(e)}</p>
                // <p>hello world</p>

            ) : <div></div>}
            {/* <p>{data}</p> */}
            {error && JSON.stringify(error)}

            {/* </form> */}
        </div>
    )
}

export default Oscarpatients
