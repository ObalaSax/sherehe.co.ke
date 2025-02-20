import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Auth/SignIn";
import Signup from "./Pages/Auth/SignUp";
import Events from "./Pages/Events";
import OneEvent from "./Pages/OneEvent";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<Signin />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="events" element={<Events />} />
        <Route path="/events/:id" element={<OneEvent />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
