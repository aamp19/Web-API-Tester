import React, { useState } from 'react'
import axios from 'axios'

const ProviderAPI = (props) => {

    const [data, setData] = useState()
    const [error, setError] = useState('')
    props.ProviderCallback(apiRequest)
    async function apiRequest() {
        // e.preventDefault()
        axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscarrest/providers`)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res.data.result.content)
                    setData(res.data.result.content)
                }
            })
            .catch(err => {
                setError(err)
            })
    }
    // console.log('data ', data)


    return (
        <div>
            {/* <form > */}
            <table>
                <tr>
                    <td><b><span>GET:   </span> /api/v1/oscarrest/providers</b></td>
                    <td><button id="oscarrest-providers" onClick={apiRequest}>Test</button></td>
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

export default ProviderAPI
