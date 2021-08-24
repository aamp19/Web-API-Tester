import React, { useState } from 'react'
import axios from 'axios'

const OscarpatientsLabresults = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.OscarPatientsLabCallback(apiRequest)
    async function apiRequest() {
        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscar/patients/14/labResults?skip=2&take=3`)
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
            <table>
                <tr>
                    <td><b><span>GET:   </span> /api/v1/oscar/patients/14/labResults</b></td>
                    <td><button id="oscarpatient" onClick={apiRequest}>Test</button></td>
                </tr>
            </table>
            {data ? [data].map(e =>

                <p className="success">{JSON.stringify(e)}</p>
                // <p>hello world</p>

            ) : <div></div>}
            {/* <p>{data}</p> */}
            {error && JSON.stringify(error)}
        </div>
    )
}

export default OscarpatientsLabresults
