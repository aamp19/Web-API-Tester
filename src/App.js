import './App.css';
import { React, useState, useEffect } from "react"
import Home from './pages/Home';
import Test from './pages/Test';
import { Route, BrowserRouter } from 'react-router-dom';
import firebase from './firebase'
function App() {
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
    <div className="App">
      <div class="topnav">
        <a href="/Test">Test</a>
        <a class='active' href="/">Home</a>
        <a href="#details">Details</a>
      </div>
      <BrowserRouter>

        <Route path='/' exact component={Home}></Route>
        <Route path='/Test' exact component={Test}></Route>
      </BrowserRouter >


    </div>
  );
}

export default App;
