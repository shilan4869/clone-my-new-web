import Menu from "./banners/menu/Menu"
import MainSlide from "./banners/slide/MainSlide"

const Banners = () => {

  return (
    <div className="container !justify-start">
      <div className="container">
        <Menu/>
        <MainSlide/>
        <div className=""></div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Banners
