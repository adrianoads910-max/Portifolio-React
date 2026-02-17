import Navbar from "../../Components/Navbar"
import About from "../../Components/About"
import Stacks from "../../Components/Stacks"
import Experience from "../../Components/Experience"
import Projects from "../../Components/Projects"
import Footer from "../../Components/Footer"

export const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar/>
      <About />
      <Stacks />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
