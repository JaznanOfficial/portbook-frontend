import HeroSection from "../components/HeroSection";
import PopularPost from "../components/PopularPost";
import PostWrite from "../components/PostWrite";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <PostWrite />
            <PopularPost />
        </div>
    );
};

export default HomePage;
