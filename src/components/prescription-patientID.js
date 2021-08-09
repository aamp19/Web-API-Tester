import React from 'react'
import axios from 'axios'
let patientId = Math.floor(Math.random() * 10)
async function apiRequest(e) {
    e.preventDefault()
    let res = await axios.get(`https://kennedy-dev1.gojitech.systems/api/v1/oscarrest/prescription/${patientId}`, { "patientId": `14` })
    console.log(res)
}


const prescriptionpatientID = () => {
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td>/api/v1/oscarrest/prescription/{patientId}</td>
                        <td>Not on page anymore</td>
                        {/* <td><button id="oscarrest-presciption-patientID" onClick={apiRequest}>Test</button></td> */}
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default prescriptionpatientID
