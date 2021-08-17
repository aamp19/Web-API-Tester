import React, { useState } from 'react'
import axios from 'axios'

export const Auth = (props) => {

    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.authCallback(apiRequest)

    async function apiRequest() {
        // e.preventDefault()
        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscarrest/auth`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res)
                    setData(res.data.result)
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
                    <td><b><span>GET:   </span>/api/v1/oscarrest/auth</b></td>
                    <td><button id="oscarrest-auth" onClick={apiRequest}>Test</button></td>
                </tr>
            </table>
            {data ? [data].map(e =>

                <p>{JSON.stringify(e)}</p>
                // <p>hello world</p>

            ) : <div></div>}
            {error && JSON.stringify(error)}
            {/* </form> */}
        </div>
    )
}

export default Auth
