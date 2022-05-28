import { HiOutlineMenu } from "react-icons/hi"
import { HiOutlineSearch } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { FaFire } from "react-icons/fa"
import { FaPercent } from "react-icons/fa"
import { FaMapMarkedAlt } from "react-icons/fa"
import { FaCreditCard } from "react-icons/fa"


const HeaderMain = () => {
  return (
    <div className="h-[77px] lg:h-[122.5px] px-[20px] py-[8px] bg-[#2579f2] flex items-between justify-center text-sm flex-wrap">
      <div className="container">
        <div className="hamburger-menu cursor-pointer lg:hidden ">
          <HiOutlineMenu className=" w-[2.2rem] h-[2.2rem] " />
        </div>

        <div className="company hidden lg:flex flex-none basis-[175px]">
          <a
            href="https://divineshop.vn"
            className=" flex flex-none basis-[100%] items-center justify-between"
          >
            <img
              src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <p className="text-xl font-semibold">Divine Shop</p>
          </a>
        </div>

        <div className="search-box flex flex-1 items-center  max-w-[420px] ">
          <input
            type="search"
            className="h-[42px] w-[100%] shadow-gray-300 shadow-inner px-4 hover:shadow-none focus:shadow-none rounded-l-[5px] outline-none"
            placeholder="Tìm kiếm sản phẩm"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-[#0a59cc] h-[42px] w-[55px] text-center rounded-r-[5px] hover:brightness-[1.15]"
            aria-label="Search"
          >
            <HiOutlineSearch className="h-[20px] w-[20px] inline-block" />
          </button>
        </div>

        <div className="login-register hidden md:flex flex-none basis-[190px] justify-between items-center h-[42px] mx-4 cursor-pointer">
          <button className="flex h-[42px] w-[42px] border-[1px] rounded-[50%] bg-[#2579f2] justify-center items-center hover:brightness-[1.15]">
            <FaUserAlt className="w-[18px] h-[18px] inline-block" />
          </button>
          <div className="font-[600] text-[0.85rem] inline-block">
            <div className="login inline">Đăng nhập</div>
            <div className="inline mx-[2px]"> / </div>
            <div className="register inline">Đăng ký</div>
          </div>
        </div>

        <div className="cart  text-center border-[1px] border-white rounded-[5px] bg-[#2579f2] hover:brightness-[1.15]">
          <a
            href="https://divineshop.vn/cart"
            className="flex justify-center gap-2 items-center w-[70px] h-[40px] md:w-[136px]"
          >
            <AiOutlineShoppingCart className="w-[22px] h-[22px] " />
            <p className="hidden font-[600] text-[0.85rem] md:inline">
              Giỏ hàng
            </p>
            <div className="bg-white rounded-[3px] text-[#111827] px-[4px] py-[1px] font-[500] shadow-gray-300 shadow-inner">
              0
            </div>
          </a>
        </div>
      </div>

      <div className="!hidden lg:!flex container">
        <div className="watched flex cursor-pointer">
          <FaEye className="w-[19px] h-[19px] mr-[10px] ml-[3px]"/>
          <p className="hover:underline">Sản phẩm bạn vừa xem</p>
        </div>

        <div className="watched flex cursor-pointer">
          <FaFire className="w-[18px] h-[18px] mr-[10px]"/>
          <p className="hover:underline">Sản phẩm mua nhiều</p>
        </div>

        <div className="watched flex cursor-pointer">
          <FaPercent className="w-[18px] h-[18px] mr-[10px]"/>
          <p className="hover:underline">Sản phẩm khuyến mại</p>
        </div>

        <div className="watched flex cursor-pointer">
          <FaMapMarkedAlt className="w-[19px] h-[19px] mr-[10px]"/>
          <p className="hover:underline">Đại lý giao dịch</p>
        </div>

        <div className="watched flex cursor-pointer">
          <FaCreditCard className="w-[19px] h-[19px] mr-[10px]"/>
          <p className="hover:underline">Hình thức thanh toán</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
