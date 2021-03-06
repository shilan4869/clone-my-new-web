import "./App.css"
import Header from "./component/UI/header/Header"
import Content from "./component/UI/content/Content"
import SideBanners from "./component/UI/sidebanners/SideBanners"
import Footer from "./component/UI/footer/Footer"

function App() {
  return (
    <div className="h-full">
      <Header />
      <Content />
      <SideBanners/>
      <Footer/>
      <div className="hidden fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.6)]"></div>
    </div>
  )
}

export default App
