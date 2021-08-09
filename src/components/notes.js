import React from 'react'
import axios from 'axios'
let patientId = Math.floor(Math.random() * 10)

async function apiRequest(e) {
    e.preventDefault()
    let res = await axios.post(`http://kennedy-dev1.gojitech.systems/api/v1/oscarrest/notes`,
        {
            "patientId": `${patientId}`,
            "note": "Test notes"
        });
    console.log(res)
}
const notes = () => {
    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td>POST: /api/v1/oscarrest/notes</td>
                        <td>Not on page anymore</td>
                        {/* <td><button id="oscarrest-notes" onClick={apiRequest}>Test</button></td> */}
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default notes
