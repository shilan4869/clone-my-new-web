import { useCallback, useRef, useState } from "react"
import Banners from "./banners/Banners"
import TrendingProducts from "./products/TrendingProducts"
import { HiTrendingUp } from "react-icons/hi"
import TopSellers from "./products/TopSellers"

let featuredIndex = 1,
  topSellerIndex = 1
const Content = () => {
  const [featuredProductsAPI, setFeaturedProductsAPI] = useState("")
  const [TopSellerAPI, setTopSellerAPI] = useState("")

  const loadMoreFeaturedProducts = () => {
    featuredIndex = featuredIndex + 1
    setFeaturedProductsAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        featuredIndex +
        "&slug=featured"
    )
  }
  const loadMoreTopSellerProducts = () => {
    topSellerIndex = topSellerIndex + 1
    setTopSellerAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        topSellerIndex +
        "&slug=trending"
    )
  }

  return (
    <div className="content flex flex-col h-full justify-start items-center bg-gray-100 border-t-[1px]">
      <div className="flex flex-col justify-start items-center w-full px-[21px]">
        <Banners />
        {/* Trending Products */}
        <div className="trending-products flex flex-col items-center w-full">
          <div className="container mt-[1rem] w-full flex-col ">
            <div className="header flex w-full justify-between font-[600]">
              <div className="products-section-heading">Sản phẩm nổi bật</div>
              <a
                href="https://divineshop.vn/search/featured"
                className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
              >
                Khám phá
              </a>
            </div>

            <div className="products-section-description">
              Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
            </div>
            {/* Trending Products */}
            <TrendingProducts
              TrendingProductsAPI={
                featuredProductsAPI ||
                "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=featured"
              }
            />
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
        {/* production tags */}
        <div className="keywords container flex-col w-full !items-start  font-[600] mb-4">
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
      </div>
      {/* Top sellers */}
      <div className="flex flex-col justify-start items-center px-[21px] top-sellers w-full pt-[10rem] pb-[3rem] text-white">
        {/* Trending Products */}
        <div className="trending-products flex flex-col items-center w-full">
          <div className="container mt-[1rem] w-full flex-col ">
            <div className="header flex w-full justify-between items-center font-[600] mb-4">
              <div className="products-section-heading items-center px-[10px] py-[5px] rounded-[20px] border-[2px] border-white">
                <HiTrendingUp className="text-red-600 mr-[10px] scale-110 w-[25px]" />
                <span className="text-[1rem]"> #Sản phẩm bán chạy nhất</span>
              </div>
              <a
                href="https://divineshop.vn/search/featured"
                className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 "
              >
                Khám phá
              </a>
            </div>

            <TopSellers
              TopSellersAPI={
                TopSellerAPI ||
                "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=trending"
              }
            />
            <div className="end-trending-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
              <button
                className="font-[500] text-[0.9rem]"
                onClick={loadMoreTopSellerProducts}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-start items-center bg-gray-100 border-t-[1px] w-full">
      <div className="flex flex-col justify-start items-center w-full px-[21px]">
        {/* Price range */}
        <div className="keywords container flex-col w-full !items-start  font-[600] mb-4">
          <div className="products-section-heading mt-8">Giá phù hợp</div>
          <nav className="w-full flex flex-wrap items-center justify-between ">
            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                20.000đ
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                50.000đ
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                100.000đ
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                200.000đ
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                500.000đ
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
              >
                1.000.000đ
              </a>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Content
