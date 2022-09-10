import Banner from "./Banner/Banner";
import Home3rd from "./Home3rd";
import Home2nd from "./Home2nd";
import Home4th from "./Home4th";
import Home5th from "./Home5th";
import Home6th from "./Home6th";
import Home7th from "./Home7th";
import NavBar from "./Banner/NavBar";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Banner />
            <div className="container mx-auto">
                <Home2nd />
                <Home3rd />
                <Home4th />
                {/* <Home5th /> */}
                <Home6th />
                <Home7th />
            </div>
        </div>
    );
};

export default HomePage;