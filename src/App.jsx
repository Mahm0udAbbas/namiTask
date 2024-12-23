import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./ui/AppLayout/AppLayout";
// import Logo from "./ui/Logo/Logo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
