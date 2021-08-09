import React, { useState } from 'react'
import axios from 'axios'



const Prescription = () => {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    async function apiRequest(e) {
        e.preventDefault()
        axios.post(`https://kennedy-dev1.gojitech.systems/api/v1/oscarrest/prescription/`, {
            "patientId": 0,
            "drugs": [
                {
                    "drugId": 0,
                    "demographicNo": 33,
                    "providerNo": 0,
                    "brandName": "AMOXICILLIN 500MG",
                    "genericName": "string",
                    "atc": "string",
                    "durationUnit": "days",
                    "regionalIdentifier": "string",
                    "takeMin": 0,
                    "takeMax": 0,
                    "rxDate": "2021-07-08T16:05:49.404Z",
                    "endDate": "2021-07-08T16:05:49.404Z",
                    "frequency": "",
                    "duration": 6,

                    "route": "",
                    "form": "",
                    "method": "",
                    "prn": true,
                    "repeats": 0,
                    "quantity": 0,
                    "instructions": "string",
                    "additionalInstructions": "",
                    "archived": true,
                    "archivedReason": "",
                    "archivedDate": null,
                    "strength": 0,
                    "strengthUnit": "",
                    "externalProvider": "",
                    "longTerm": true,
                    "noSubstitutions": true
                }
            ]
        })
            .then((res) => {
                console.log(res.status)
                if (res.status === 201) {
                    console.log(res.data.result)
                    setData(res.data.result)
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
                        <td><b><span class="post">POST:</span> /api/v1/oscarrest/prescription</b></td>
                        <td><button id="oscarrest-presciption" onClick={apiRequest}>Test</button></td>
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

export default Prescription
