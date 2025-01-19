import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./interfaces/redux/rootState";

function App() {

  const user = useSelector((state: RootState) => state.auth.user)
  
  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));
  const Cart = lazy(() => import("./pages/Cart"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {/* <FlashMessage /> */}
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
