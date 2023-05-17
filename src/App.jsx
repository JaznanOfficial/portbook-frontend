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
import DetailsPost from "./pages/DetailsPost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "./hooks/useFirebase";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
    const navigate = useNavigate();
    const { user, dataLoading } = useFirebase();
    if (!user.auth) {
        navigate("/sign-in");
    }
    if (dataLoading) {
        return <Loader />;
    }
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/media" element={<AllPosts />}></Route>
                <Route path="/media/:id" element={<DetailsPost />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/sign-in" element={<SignIn />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
