import React from 'react'
import { useState, useEffect } from "react"
import firebase from '../firebase'

const Home = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase
        .firestore()
        .collection("test-results")
        .orderBy("timestamp", "desc");
    // const db = firebase.firestore(firebase);

    const getTests = function () {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            setTests(items);
            setLoading(false);
        });
    };
    useEffect(() => {
        getTests();
    }, []);
    return (
        <div>
            <table>
                <tr>
                    <td>
                        Date
                    </td>
                    <td>Status</td>
                    <td>Succeeded</td>
                    <td>Failed</td>
                </tr>
                <tr>
                    <td>
                        {tests.map((test) => (
                            <div key={test.id}>
                                <button>
                                    <h2>{new Date(test.timestamp.seconds * 1000).toLocaleString()}</h2>
                                </button>
                                {test.results.map((result) => (
                                    <div key={result.id}>

                                        {new Date(result.timestamp.seconds * 1000).toLocaleString()}

                                    </div>
                                ))}
                            </div>
                        ))}
                    </td>


                    <td>
                        {tests.map((test) => (
                            <div key={test.id}>

                                {test.results.map((result) => (
                                    <div key={result.id}>

                                        {result.status}

                                        <br />
                                    </div>
                                ))}
                            </div>
                        ))}</td></tr>

            </table>

            {/* {tests.map((test) => (
                <div key={test.id}>
                    <button>
                        <h2>{new Date(test.timestamp.seconds * 1000).toLocaleString()}</h2>
                    </button>
                    {test.results.map((result) => (
                        <div key={result.id}>
                            <h4>{result.endpointURL}</h4>
                            <p>{result.apiType}</p>
                            <p>{result.status}</p>
                            <p>
                                {new Date(result.timestamp.seconds * 1000).toLocaleString()}
                            </p>
                            <br />
                        </div>
                    ))}
                </div>
            ))} */}
        </div>
    )
}

export default Home
