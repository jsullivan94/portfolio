import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Nav from "../components/Nav";

function Home() {
    return (
        <div>
            <Nav />
            <Bio />
            <Projects />  
            <Contact />
        </div>
    )
}

export default Home;