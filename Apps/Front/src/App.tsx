import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import { Games } from "./Pages/Games";
import { Score } from "./Pages/Score";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/Games" element={<Games />} />
        <Route path="/Score" element={<Score />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
