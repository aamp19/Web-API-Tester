import React, { useState } from 'react'
import axios from 'axios'

const OscarpateintsAll = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.OscarPatientsAllCallback(apiRequest)
    async function apiRequest() {

        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscar/patients/all`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res.data)
                    setData(res.data.result.content)
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
                    <td><b><span>GET:   </span> /api/v1/oscar/patients/all</b></td>
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

export default OscarpateintsAll
