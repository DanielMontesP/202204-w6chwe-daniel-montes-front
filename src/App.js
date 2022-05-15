import { Navigate, Route, Routes } from "react-router-dom";
// import FavsPage from "./pages/FavsPage";
// import HomePage from "./pages/HomePage";
// import ShowDetailPage from "./pages/ShowDetailPage";
// import ShowsProvider from "./store/context/ShowsProvider";

function App() {
  return (
    <>
      {/* <ShowsProvider> */}
      <img src="robotLadeao.png" alt="Imagen de robot fisgoneando" />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        {/* <Route path="/homepage" element={<HomePage />} />
          <Route path="/favspage" element={<FavsPage />} />
          <Route path="/showdetailpage" element={<ShowDetailPage />} /> */}
      </Routes>
      {/* </ShowsProvider> */}
    </>
  );
}

export default App;
