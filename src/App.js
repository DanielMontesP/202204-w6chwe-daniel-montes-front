import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

import RobotsProvider from "./store/context/RobotsProvider";

function App() {
  return (
    <>
      <RobotsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </RobotsProvider>
    </>
  );
}

export default App;
