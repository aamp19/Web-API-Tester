import React, { useState } from 'react'
import axios from 'axios'

const ProviderAPI = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    async function apiRequest(e) {
        e.preventDefault()
        axios.get(`http://kennedy-dev1.gojitech.systems/api/v1/oscarrest/providers`)
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
            <form >
                <table>
                    <tr>
                        <td><b><span>GET:   </span> /api/v1/oscarrest/providers</b></td>
                        <td><button id="oscarrest-providers" onClick={apiRequest}>Test</button></td>
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

export default ProviderAPI