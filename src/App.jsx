import { Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPosts from "./components/AllPosts";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/media" element={<AllPosts />}></Route>
                <Route path="/media/:id" element={<AllPosts />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
