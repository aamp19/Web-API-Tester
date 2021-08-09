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
function App() {
  return (
    <div className="App">
      <h1>API Testing</h1>
      <h2>Oscarrest API Testing</h2>
      <Provider />
      <NotesPatientID />
      {/* <Notes /> */}
      <Prescription />
      {/* <PrescriptionpatientID /> */}
      <Patient />
      <Auth />
      <h2>Oscar API Testing</h2>
      <Oscarpatients />
      <OscarpatientsPost />
      <OscarpatientsDemographic />
      <OscarpateintsAll />
      <OscarpatientsAllergies />
      <OscarpateintsMeasurements />
      <OscarpatientsDocuments />
      <OscarpatientsForm />
      <OscarpatientsLabresults />
    </div>
  );
}

export default App;
