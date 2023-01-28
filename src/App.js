import { ColorModeContext, useMode } from "./theme";
import { AppBar, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Navbar from "./scenes/global/Navbar";
// import Sidebar from "./scenes/global/Sidebar";
import Login from "./scenes/Login";
import ForgotPassword from "./scenes/forgot"
import Dashboard from "./scenes/dashboard";
import Appointment from "./scenes/appoint";
import Contacts from "./scenes/patients";
import MeetingInfo from "./scenes/infomeeting";
import Profile from "./scenes/updateprofile/Profile";
import ProfileUpdate from "./scenes/updateprofile/Update";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar";
import DoctorList from "./scenes/DoctorList";
import MedicalRecord from "./scenes/MedicaRecords";
import PatientHistory from "./scenes/PatientHistory";
import TDMsection from "./scenes/TDM";
import AvalaibleTime from "./scenes/AvalaibleTIme";
import Doctor from "./scenes/Doctor";
import Payment from "./scenes/Payment";
import Symptoms from "./scenes/symptopms";
import Dash from "./scenes/dashboard/Dash";
import Insurence from "./scenes/insurence/Insurence";
// import  from "./scenes/global/Appbar";
import Signup from "./scenes/Signup";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>

          </Routes>
          <Navbar />
          {/* <Appbar /> */}
          {/* <Sidebar /> */}
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" exact element={<Dashboard />} /> */}
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              {/* <Route path="/" exact element={<Dashboard />} /> */}
              {/* <Route path="/" element={<Dash />} /> */}
              <Route path="/" element={<Dash />} />
              <Route path="/insurence" element={<Insurence />} />
              <Route path="/appoint" element={<Appointment />} />
              <Route path="/patientlist" element={<Contacts />} />
              <Route path="/infomet" element={<MeetingInfo />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/updateprofile" element={<ProfileUpdate />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/doclist" element={<DoctorList />} />
              <Route path="/medical_records" element={<MedicalRecord />} />
              <Route path="/patientHistory" element={<PatientHistory />} />
              <Route path="/tdm" element={<TDMsection />} />
              <Route path="/avalaibletime" element={<AvalaibleTime />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/forgotpass" element={<ForgotPassword />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
