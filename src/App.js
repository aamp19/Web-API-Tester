import './App.css';
import Provider from './components/ProviderAPI';
import NotesPatientID from './components/notes-patientID';
// import Notes from './components/notes';
import Prescription from './components/Prescription';
// import PrescriptionpatientID from './components/prescription-patientID';
import Patient from './components/patient';
import Auth from './components/auth';
import Oscarpatients from './components/Oscarpatients';
import OscarpatientsPost from './components/OscarpatientsPost';
import OscarpatientsDemographic from './components/OscarpatientsDemographic';
import OscarpateintsAll from './components/OscarpateintsAll';
import OscarpatientsAllergies from './components/OscarpatientsAllergies';
import OscarpatientsDocuments from './components/OscarpatientsDocuments';
import OscarpateintsMeasurements from './components/OscarpateintsMeasurements';
import OscarpatientsForm from './components/OscarpatientsForm';
import OscarpatientsLabresults from './components/OscarpatientsLabresults';
import Testall from './components/Testall';
import React from "react"
function App() {
  const callbackRef = React.useRef();
  function registerCallback(callback) {
    callbackRef.current = callback;
  }
  const authRef = React.useRef()
  function authCallback(callback) {
    authRef.current = callback
  }
  const notes_patientID = React.useRef()
  function notes_patientIDCallback(callback) {
    notes_patientID.current = callback
  }

  const prescription = React.useRef()
  function prescriptionCallback(callback) {
    prescription.current = callback
  }

  const patientcallbackref = React.useRef()
  function patientCallback(callback) {
    patientcallbackref.current = callback
  }

  const OscarPatientsDemoCallbackref = React.useRef()
  function OscarPatientsDemoCallback(callback) {
    OscarPatientsDemoCallbackref.current = callback
  }

  const OscarPatientsAllCallbackref = React.useRef()
  function OscarPatientsAllCallback(callback) {
    OscarPatientsAllCallbackref.current = callback
  }

  const OscarPatientsAllergiesCallbackref = React.useRef()
  function OscarPatientsAllergiesCallback(callback) {
    OscarPatientsAllergiesCallbackref.current = callback
  }

  const OscarPatientsDocCallbackref = React.useRef()
  function OscarPatientsDocCallback(callback) {
    OscarPatientsDocCallbackref.current = callback
  }

  const OscarPatientsFormCallbackref = React.useRef()
  function OscarPatientsFormCallback(callback) {
    OscarPatientsFormCallbackref.current = callback
  }

  const OscarPatientsLabCallbackref = React.useRef()
  function OscarPatientsLabCallback(callback) {
    OscarPatientsLabCallbackref.current = callback
  }

  const OscarPatientsMeasureCallbackref = React.useRef()
  function OscarPatientsMeasureCallback(callback) {
    OscarPatientsMeasureCallbackref.current = callback
  }
  const OscarPatientsPostCallbackref = React.useRef()
  function OscarPatientsPostCallback(callback) {
    OscarPatientsPostCallbackref.current = callback
  }
  const ProviderCallbackref = React.useRef()
  function ProviderCallback(callback) {
    ProviderCallbackref.current = callback
  }
  return (
    <div className="App">
      <h1>API Testing</h1>
      <h2>Oscarrest API Testing</h2>
      <button onClick={() => { callbackRef.current(); ProviderCallbackref.current(); OscarPatientsPostCallbackref.current(); authRef.current(); OscarPatientsMeasureCallbackref.current(); notes_patientID.current(); prescription.current(); patientcallbackref.current(); OscarPatientsDemoCallbackref.current(); OscarPatientsAllCallbackref.current(); OscarPatientsAllergiesCallbackref.current(); OscarPatientsDocCallbackref.current(); OscarPatientsFormCallbackref.current(); OscarPatientsLabCallbackref.current(); }}>Test All</button>


      <Provider ProviderCallback={ProviderCallback} />
      <NotesPatientID notes_patientIDCallback={notes_patientIDCallback} />
      {/* <Notes /> */}
      <Prescription prescriptionCallback={prescriptionCallback} />
      {/* <PrescriptionpatientID /> */}
      <Patient patientCallback={patientCallback} />
      <Auth authCallback={authCallback} />
      <h2>Oscar API Testing</h2>

      <Oscarpatients registerCallback={registerCallback} />
      <OscarpatientsPost OscarPatientsPostCallback={OscarPatientsPostCallback} />
      <OscarpatientsDemographic OscarPatientsDemoCallback={OscarPatientsDemoCallback} />
      <OscarpateintsAll OscarPatientsAllCallback={OscarPatientsAllCallback} />
      <OscarpatientsAllergies OscarPatientsAllergiesCallback={OscarPatientsAllergiesCallback} />
      <OscarpateintsMeasurements OscarPatientsMeasureCallback={OscarPatientsMeasureCallback} />
      <OscarpatientsDocuments OscarPatientsDocCallback={OscarPatientsDocCallback} />
      <OscarpatientsForm OscarPatientsFormCallback={OscarPatientsFormCallback} />
      <OscarpatientsLabresults OscarPatientsLabCallback={OscarPatientsLabCallback} />


    </div>
  );
}

export default App;
