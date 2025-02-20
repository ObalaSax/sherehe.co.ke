import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Auth/SignIn";
import Signup from "./Pages/Auth/SignUp";
import Events from "./Pages/Events";
import OneEvent from "./Pages/OneEvent";
import Checkout from "./Pages/Checkout";
import Navbar from "./Compontents/Navbar";
//import Footer from "./Compontents/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<Signin />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<OneEvent />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Footer />*/}
    </BrowserRouter>
  );
}

export default App;
