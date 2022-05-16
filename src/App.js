import { Navigate, Route, Routes } from "react-router-dom";
import RobotsPage from "./pages/RobotsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots" element={<RobotsPage />} />
      </Routes>
    </>
  );
}

export default App;
