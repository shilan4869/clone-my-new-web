import AdsSlider from "./AdsSlider"
import { memo } from "react"

const HeaderTop = () => {
  return (
    <div className="hidden lg:flex px-[20px] bg-blue-700 h-[42px] items-center justify-center text-sm w-full">
      <div className="container">

          <AdsSlider/>
        

        <div className="flex gap-2 items-center text-[0.89rem]">

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-book.svg?hash=1635136430" alt=""
                className="w-[1rem] h-[1rem] invert mr-2" 
                />
                <p className="hover:underline">Hướng dẫn mua hàng</p>
            </a>

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-badge-percent.svg?hash=1635136430" alt=""
                className="w-[1rem] h-[1rem] invert mr-2" 
                />
                <p className="hover:underline">Ưu đãi khách hàng</p>
            </a>

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-phone-alt.svg?hash=1635136430" alt=""
                className="w-[1rem] h-[1rem] invert mr-2" 
                />
                <p className="hover:underline">Thông tin liên hệ</p>
            </a>
        </div>

      </div>
    </div>
  )
}

export default memo(HeaderTop)
