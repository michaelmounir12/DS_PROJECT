import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import OPPORTUNITIES from "./pages/FindOpper";
import { AuthContext, AuthProvider } from "./utils/context";
import AdminDashboard from "./pages/admin";
import { useContext } from "react";
import Un from "./pages/unauth";
import Compare from "./pages/Compare";
import ItemList from "./pages/ItemsList";

function App() {

  
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/opportunities" element={<OPPORTUNITIES />} />
            <Route path="/itemsList" element={<ItemList />} />
            

            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
