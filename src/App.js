import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Show from "./Pages/Show";
import End from "./Pages/End";
import Share from "./Pages/Share";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" element={<Main />} />
            <Route path="/Show" element={<Show />} />
            <Route path="/End" element={<End />} />
            <Route path="/Share" element={<Share />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
