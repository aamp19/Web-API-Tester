import React, { useState } from 'react'
import axios from 'axios'

const OscarpatientsPost = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.OscarPatientsPostCallback(apiRequest)
    async function apiRequest() {
        // e.preventDefault()
        axios.post(`https://kennedy-dev1.gojitech.systems/api/v1/oscar/patients`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 201) {
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
            {/* <form> */}
            <table>
                <tr>
                    <td><b><span class="post">POST:   </span> /api/v1/oscar/patients</b></td>
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

export default OscarpatientsPost
