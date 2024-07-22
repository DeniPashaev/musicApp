import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPages";
import ImagesPage from "./pages/imagesPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/page" element={<ImagesPage />}/>
      </Routes>
    </>
  );
}
export default App;
