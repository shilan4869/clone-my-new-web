import { useCallback, useRef, useState } from "react"
import Banners from "./banners/Banners"
import TrendingProducts from "./products/TrendingProducts"
import { HiTrendingUp } from "react-icons/hi"
import TopSellers from "./products/TopSellers"
import SteamGames from "./products/SteamGames"
import Applications from "./products/Applications"
import CodeWallet from "./products/CodeWallet"
import DataMobile from "./products/DataMobile"

let featuredIndex = 1,
  topSellerIndex = 1,
  steamGamesIndex = 1,
  applicationsIndex = 1,
  codeWalletIndex = 1,
  dataMobileIndex = 1

const Content = () => {
  const [featuredProductsAPI, setFeaturedProductsAPI] = useState("")
  const [topSellerAPI, setTopSellerAPI] = useState("")
  const [steamGamesAPI, setSteamGamesAPI] = useState("")
  const [applicationsAPI, setApplicationsAPI] = useState("")
  const [codeWalletAPI, setCodeWalletAPI] = useState("")
  const [dataMobileAPI, setDataMobileAPI] = useState("")

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

  const loadMoreSteamGames = () => {
    steamGamesIndex = steamGamesIndex + 1
    setSteamGamesAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        steamGamesIndex +
        "&slug=steam"
    )
  }

  const loadMoreApplications = () => {
    applicationsIndex = applicationsIndex + 1
    setApplicationsAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        applicationsIndex +
        "&slug=application"
    )
  }

  const loadMoreCodeWallet = () => {
    codeWalletIndex = codeWalletIndex + 1
    setCodeWalletAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        codeWalletIndex +
        "&slug=code-wallet"
    )
  }
  
  const loadMoreDataMobile = () => {
    dataMobileIndex = dataMobileIndex + 1
    setDataMobileAPI(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?page=" +
        dataMobileIndex +
        "&slug=data-mobile"
    )
  }
  return (
    <div className="content flex flex-col justify-start items-center bg-gray-100 border-t-[1px]">
      <div className="flex flex-col justify-start items-center w-full px-[21px]">
        <Banners />
        {/* Featured Products */}
        <div className="trending-products flex flex-col items-center w-full">
          <div className="container mt-[1rem] w-full flex-col ">
            <div className="header flex w-full justify-between font-[600]">
              <div className="products-section-heading">S???n ph???m n???i b???t</div>
              <a
                href="https://divineshop.vn/search/featured"
                className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
              >
                Kh??m ph??
              </a>
            </div>

            <div className="products-section-description">
              Danh s??ch nh???ng s???n ph???m theo xu h?????ng m?? c?? th??? b???n s??? th??ch
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
                Xem th??m
              </button>
            </div>
          </div>
        </div>
        {/* Trending*/}
        <div className="keywords container flex-col w-full !items-start  font-[600] mb-4">
          <div className="products-section-heading mt-8">T??? kh??a n???i b???t</div>
          <nav className="w-full flex flex-wrap items-center justify-between text-white">
            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#3D5A80] rounded-[5px] active:scale-95"
              >
                L??m vi???c
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#98C1D9] rounded-[5px] active:scale-95"
              >
                Gi???i tr??
              </a>
            </div>

            <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
              <a
                href="#"
                className="flex justify-center w-full py-[15%] bg-[#EE6C4D] rounded-[5px] active:scale-95"
              >
                H???c t???p
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
      {/* Steam */}
      <div className="flex flex-col justify-start items-center px-[21px] top-sellers w-full pt-[10rem] pb-[3rem] text-white">
        <div className="top-seller flex flex-col items-center w-full">
          <div className="container mt-[1rem] w-full flex-col ">
            <div className="header flex w-full justify-between items-center font-[600] mb-4">
              <div className="products-section-heading items-center px-[10px] py-[5px] rounded-[20px] border-[2px] border-white">
                <HiTrendingUp className="text-red-600 mr-[10px] scale-110 w-[25px]" />
                <span className="text-[1rem]"> #S???n ph???m b??n ch???y nh???t</span>
              </div>
              <a
                href="https://divineshop.vn/search/trending"
                className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 "
              >
                Kh??m ph??
              </a>
            </div>

            <TopSellers
              TopSellersAPI={
                topSellerAPI ||
                "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=trending"
              }
            />
            <div className="end-trending-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
              <button
                className="font-[500] text-[0.9rem]"
                onClick={loadMoreTopSellerProducts}
              >
                Xem th??m
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-start items-center bg-gray-100 border-t-[1px] w-full">
        <div className="flex flex-col justify-start items-center w-full px-[21px]">
          {/* Price range */}
          <div className="price-ranges container flex-col w-full !items-start  font-[600] mb-4">
            <div className="products-section-heading mt-8">Gi?? ph?? h???p</div>
            <nav className="w-full flex flex-wrap items-center justify-between ">
              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  20.000??
                </a>
              </div>

              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  50.000??
                </a>
              </div>

              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  100.000??
                </a>
              </div>

              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  200.000??
                </a>
              </div>

              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  500.000??
                </a>
              </div>

              <div className="flex basis-[30%] md:basis-[15%] mb-[20px]">
                <a
                  href="#"
                  className="flex justify-center w-full py-[15%] bg-white rounded-[5px] active:scale-95 border-gray-200 border-[1px]"
                >
                  1.000.000??
                </a>
              </div>
            </nav>
          </div>
          {/* Game on Steam */}
          <div className="trending-products flex flex-col items-center w-full">
            <div className="container mt-[1rem] w-full flex-col ">
              <div className="header flex w-full justify-between font-[600]">
                <div className="products-section-heading">Game tr??n Steam</div>
                <a
                  href="https://divineshop.vn/search/steam"
                  className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
                >
                  Kh??m ph??
                </a>
              </div>

              <div className="products-section-description">
                Nh???ng tr?? ch??i ???????c ????nh gi?? t???t, n???i dung h???p d???n thu h??t ??ang
                ch??? b???n
              </div>
              {/* Trending Products */}
              <SteamGames
                steamGamesAPI={
                  steamGamesAPI ||
                  "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=steam"
                }
              />
              <div className="end-trending-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
                <button
                  className="text-[#2579f2] font-[500] text-[0.9rem]"
                  onClick={loadMoreSteamGames}
                >
                  Xem th??m
                </button>
              </div>
            </div>
          </div>
          {/* Application */}
          <div className="applications flex flex-col items-center w-full">
            <div className="container mt-[1rem] w-full flex-col ">
              <div className="header flex w-full justify-between font-[600]">
                <div className="products-section-heading">
                  ???ng d???ng ti???n l???i
                </div>
                <a
                  href="https://divineshop.vn/search/application"
                  className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
                >
                  Kh??m ph??
                </a>
              </div>

              <Applications
                applicationsAPI={
                  applicationsAPI ||
                  "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=application"
                }
              />
              <div className="applications-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
                <button
                  className="text-[#2579f2] font-[500] text-[0.9rem]"
                  onClick={loadMoreApplications}
                >
                  Xem th??m
                </button>
              </div>
            </div>
          </div>
          {/* Code Wallet */}
          <div className="code-wallet flex flex-col items-center w-full">
            <div className="container mt-[1rem] w-full flex-col ">
              <div className="header flex w-full justify-between font-[600]">
                <div className="products-section-heading">Code Wallet</div>
                <a
                  href="https://divineshop.vn/search/code-wallet"
                  className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
                >
                  Kh??m ph??
                </a>
              </div>

              <CodeWallet
                codeWalletAPI={
                  codeWalletAPI ||
                  "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=code-wallet"
                }
              />
              <div className="applications-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
                <button
                  className="text-[#2579f2] font-[500] text-[0.9rem]"
                  onClick={loadMoreCodeWallet}
                >
                  Xem th??m
                </button>
              </div>
            </div>
          </div>
          {/* Data Mobile */}
          <div className="data-mobile flex flex-col items-center w-full">
            <div className="container mt-[1rem] w-full flex-col ">
              <div className="header flex w-full justify-between font-[600]">
                <div className="products-section-heading">Data ??i???n tho???i</div>
                <a
                  href="https://divineshop.vn/search/data-mobile"
                  className="bg-[#2579f2] px-[20px] py-[5px] leading-7 rounded-[5px] text-[0.8rem] text-white hover:brightness-110 border-[1px] hover:border-[#2579f2] active:border-[#2579f2]"
                >
                  Kh??m ph??
                </a>
              </div>

              <DataMobile
                dataMobileAPI={
                  dataMobileAPI ||
                  "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=data-mobile"
                }
              />
              <div className="applications-product w-full pb-[15px] text-center border-b-[1px] border-gray-300">
                <button
                  className="text-[#2579f2] font-[500] text-[0.9rem]"
                  onClick={loadMoreDataMobile}
                >
                  Xem th??m
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
