import { HiOutlineMenu } from "react-icons/hi"

const HeaderBottom = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-white h-[52.5px] text-gray-700 px-[20px] text-[0.85rem] w-full">
      <div className="container ">
        <button className="portfolio flex justify-between items-center cursor-pointer">
          <HiOutlineMenu className="p-0 w-[22px] h-[22px]" />
          <h3 className="ml-[.75em] font-semibold">Danh mục sản phẩm</h3>
        </button>

        <div className="flex justify-between cursor-pointer">
            <a className="flex justify-between items-center hover:underline ml-[20px]">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Nap-thesvg-30724.svg?hash=1640449820" alt="" />
                <h3 className="ml-[.75em] font-semibold">Thủ thuật & Tin Tức</h3>
            </a>

            <a className="flex justify-between items-center hover:underline ml-[20px]">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Gioi-thieu-ban-be-87652.svg?hash=1640449820" alt="" />
                <h3 className="ml-[.75em] font-semibold">Giới thiệu bạn bè</h3>
            </a>

            <a className="flex justify-between items-center hover:underline ml-[20px]">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Lien-he-hop-tac-33199.svg?hash=1640449820" alt="" />
                <h3 className="ml-[.75em] font-semibold">Liên hệ hợp tác</h3>
            </a>

            <a className="flex justify-between items-center hover:underline ml-[20px]">
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Uu-dai-khach-vip-79547.svg?hash=1640449820" alt="" />
                <h3 className="ml-[.75em] font-semibold">Ưu đãi khách hàng VIP</h3>
            </a>

            
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
