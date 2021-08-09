import React, { useState } from 'react'
import axios from 'axios'

const Patient = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    async function apiRequest(e) {
        e.preventDefault()
        await axios.get(`http://kennedy-dev1.gojitech.systems/api/v1/oscarrest/patients?skip=4&take=3&keyword=test`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res.data.result.data)
                    setData(res.data.result.data)
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
                        <td><b><span>GET:   </span> /api/v1/oscarrest/patients</b></td>
                        <td><button id="oscarrest-patient" onClick={apiRequest}>Test</button></td>
                    </tr>
                </table>
                {data ? data.map(e =>

                    <p>{JSON.stringify(e)}</p>
                    // <p>hello world</p>

                ) : <div></div>}
                {/* <p>{data}</p> */}
                {error && JSON.stringify(error)}
            </form>
        </div>
    )
}

export default Patient
