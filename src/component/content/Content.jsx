import { useCallback, useRef, useState } from "react"
import Banners from "./banners/Banners"
import TrendingProducts from "./products/trending/TrendingProducts"
let featuredIndex = 1
const Content = () => {
  const [featuredProductsAPI, setFeaturedProductsAPI] = useState("")
  const loadMoreFeaturedProducts = () => {
    featuredIndex = featuredIndex + 1
    setFeaturedProductsAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        featuredIndex +
        "&slug=featured"
    )
    console.log(
      "sending new API: https://divineshop.vn/api/product/list?page=" +
        featuredIndex +
        "&slug=featured"
    )
  }

  return (
    <div className="content flex flex-col h-full justify-start items-center bg-gray-100 border-t-[1px]">
      
        <Banners />
        <div className="trending-products flex flex-col items-center w-full">
          <div className="container mt-[1rem] w-full flex-col ">
            <div className="header flex w-full justify-between font-[600]">
              <div className="products-section-heading">Sản phẩm nổi bật</div>
              <a
                href="https://divineshop.vn/search/featured"
                className="bg-[#2579f2] px-[14px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2]"
              >
                Khám phá
              </a>
            </div>

            <div className="products-section-description">
              Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
            </div>
            {/* Trending Products */}
            <TrendingProducts featuredProductsAPI={featuredProductsAPI} />
            <div className="end-trending-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
              <button
                className="text-[#2579f2] font-[500] text-[0.9rem]"
                onClick={loadMoreFeaturedProducts}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
s
        <div className="keywords container flex-col w-full !items-start  font-[600]">
          <div className="products-section-heading mt-8">Từ khóa nổi bật</div>
          <nav className="w-full flex flex-wrap items-center justify-between text-white">
            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#3D5A80] rounded-[5px] active:scale-95"
              >
                Làm việc
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#98C1D9] rounded-[5px] active:scale-95"
              >
                Giải trí
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#EE6C4D] rounded-[5px] active:scale-95"
              >
                Học tập
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#293241] rounded-[5px] active:scale-95"
              >
                Spotify
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#545B67] rounded-[5px] active:scale-95"
              >
                Wallet
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#767C85] rounded-[5px] active:scale-95"
              >
                Youtube
              </a>
            </div>
          </nav>
        </div>
      
      <div className="top-sellers w-full min-h-[500px] pt-[10rem] pb-[2.5rem]"></div>
    </div>
  )
}

export default Content
