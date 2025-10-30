import Gallery from "../components/Gallery"
import HeroSlider from "../components/HeroSlider"
import ChatBot from "../components/ChatBot"
import ReviewBox from "../components/ReviewBox"

const LandingPage = () => {
  return (
    <div>
      <HeroSlider/>
      <Gallery/>
      <ChatBot/>
      <ReviewBox />
    </div>
  )
}

export default LandingPage