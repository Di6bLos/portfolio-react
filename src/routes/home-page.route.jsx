
import Hero from "../components/layouts/Hero.cmp"
import FeaturedWork from "../components/layouts/FeaturedWork.cmp";
import AboutMe from "../components/layouts/AboutMe.cmp";


export default function HomePage() {

    return (
        <div className="main">
            <Hero />
            <FeaturedWork />
            <AboutMe />
        </div>
    )
}

