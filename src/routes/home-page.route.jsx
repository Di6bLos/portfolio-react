
import Hero from "../components/layouts/Hero.cmp"
import FeaturedWork from "../components/layouts/FeaturedWork.cmp";


const HomePage = () => {

    return (
        <div className="main">
            <Hero />
            <FeaturedWork />
        </div>
    )
}

export default HomePage;