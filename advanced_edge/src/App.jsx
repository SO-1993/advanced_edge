import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <div>
      <Header/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      </div>
  );
}

export default App;
