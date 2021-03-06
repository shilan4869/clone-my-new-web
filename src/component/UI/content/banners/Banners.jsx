import Menu from "./menu/Menu"
import SecondBanner from "./secondbanner/SecondBanner"
import ThirdBanner from "./thirdbanner/ThirdBanner"
import MainSlide from "./slide/MainSlide"
import { memo, useEffect, useState } from "react"

const bannerAPI = 'https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/home/banners'
const Banners = () => {
  const [banners, setBanners] = useState(null)
  useEffect(()=>{
      fetch(bannerAPI)
      .then(res=>res.json())
      .then(data=>{
        const newBanner = data.list.filter((v,i) => i<6)
        setBanners(newBanner)
      })
    },[])
    
  return (
    <div className="container !justify-start flex-col py-[21px]">
      <div className="container flex-col  lg:flex-row ">
        <Menu/>
        <MainSlide/>
        <SecondBanner banners={banners}/>
      </div>
      <ThirdBanner banners={banners}/>
    </div>
  )
}

export default memo(Banners)
