import React, { useState } from 'react'
import axios from 'axios'

const OscarpatientsForm = () => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    async function apiRequest(e) {
        e.preventDefault()
        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscar/patients/14/forms`)
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
            <form>
                <table>
                    <tr>
                        <td><b><span>GET:   </span> /api/v1/oscar/patients/14/forms</b></td>
                        <td><button id="oscarpatient" onClick={apiRequest}>Test</button></td>
                    </tr>
                </table>
                {data ? [data].map(e =>

                    <p>{JSON.stringify(e)}</p>
                    // <p>hello world</p>

                ) : <div></div>}
                {/* <p>{data}</p> */}
                {error && JSON.stringify(error)}
            </form>
        </div>
    )
}

export default OscarpatientsForm
