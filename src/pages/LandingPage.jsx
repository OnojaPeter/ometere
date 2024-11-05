import Hero from "../Components/Hero"
import Deal from "../Components/Deal"
import About from "../Components/About"
import Featured from "../Components/Featured"
import Faq from "../Components/Faq"
import Footer from "../Components/Footer"

const LandingPage = () => {
  return (
    <div className="">{/*w-screen*/}
        <Hero />
        <Deal />
        <About />
        <Featured />
        <Faq />
        {/* <Footer /> */}
    </div>
  )
}

export default LandingPage