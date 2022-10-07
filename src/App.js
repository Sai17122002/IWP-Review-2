import "./App.css";
import HomePage from "./Components/HomePage";
import DashBoard from "./Components/DashBoard";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DashBoardFriends from "./Components/DashBoardFriends";
import DashboardTransaction from "./Components/DashboardTransaction";
import DashboardGroups from "./Components/DashboardGroups";
import Group from "./Components/Group";
import CreateGroup from "./Components/CreateGroup";
import JoinGroup from "./Components/JoinGroup";
import Settings from "./Components/Settings";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomeLogin" element={<Login />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/DashboardFriends" element={<DashBoardFriends />} />
        <Route
          path="/DashboardTransaction"
          element={<DashboardTransaction />}
        />
        <Route path="/DashboardGroups" element={<DashboardGroups />} />
        <Route path="/group" element={<Group />} />
        <Route path="/CreateGroup" element={<CreateGroup />} />
        <Route path="/joingroup" element={<JoinGroup />} />
        <Route path="/Settings" element={<Settings />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
