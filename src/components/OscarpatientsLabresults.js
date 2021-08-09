import React, { useState } from 'react'
import axios from 'axios'

const OscarpatientsLabresults = () => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    async function apiRequest(e) {
        e.preventDefault()
        axios.get(`http://kennedy-dev1.gojitech.systems/api/v1/oscar/patients/14/labResults?skip=2&take=3`)
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
                        <td><b><span>GET:   </span> /api/v1/oscar/patients/14/labResults</b></td>
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

export default OscarpatientsLabresults
