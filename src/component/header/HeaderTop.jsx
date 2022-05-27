import AdsSlider from "./AdsSlider"

const HeaderTop = () => {
  return (
    <div className="hidden lg:flex px-6 bg-blue-700 h-10 items-center justify-center text-sm">
      <div className="flex justify-between w-[100%] max-w-[1200px] items-center">

          <AdsSlider/>
        

        <div className="flex gap-2 items-center">

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-book.svg?hash=1635136430" alt=""
                className="w-[14px] h-[14px] invert mr-2" 
                />
                <p className="hover:underline">Hướng dẫn mua hàng</p>
            </a>

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-badge-percent.svg?hash=1635136430" alt=""
                className="w-[14px] h-[14px] invert mr-2" 
                />
                <p className="hover:underline">Ưu đãi khách hàng</p>
            </a>

            <a href="#" className="flex items-center cursor-pointer">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-phone-alt.svg?hash=1635136430" alt=""
                className="w-[14px] h-[14px] invert mr-2" 
                />
                <p className="hover:underline">Thông tin liên hệ</p>
            </a>
        </div>

      </div>
    </div>
  )
}

export default HeaderTop
