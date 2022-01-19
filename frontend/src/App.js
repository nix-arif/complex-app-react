import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeGuest from "./screens/home-guest";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGuest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
