const Footer = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center bg-black text-white">
        <div className="container flex-col items-center justify-center p-[20px] md:flex-row">
          <img
            src="https://cdn.divineshop.vn/static/528b91cfa29c7ffd85418f4b1e8cc8ce.svg"
            alt=""
            className=""
          />
          <div className="mb-4 w-full">
            <div className="text-[26px] font-bold">Bạn chưa có tài khoản?</div>
            <div className="my-4 text-[.85rem]">
              Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích
              lũy ưu đãi khi thanh toán các sản phẩm và tham gia vào chương
              trình Giới thiệu bạn bè nhận hoa hồng vĩnh viễn tại Divine Shop.
            </div>
            <div className="flex items-center text-[.85rem]">
              <button className="rounded-[5px] border-[1px] border-black bg-[#2579f2] py-[10px] px-[20px] font-semibold hover:border-[#2579f2] hover:brightness-110">
                Đăng ký ngay
              </button>
              <p className="ml-[16px]">Hoặc bạn đã có tài khoản?</p>
              <button className="p-[5px] font-semibold">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gray-100">
        <div className="container flex-col items-center justify-center px-[20px] py-4">
          {/* <!-- Payment options --> */}
          <a href="#" className="flex w-full items-center gap-2 text-[.85rem]">
            <img
              src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg"
              alt="momo"
              className="w-6"
            />
            <img
              src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg"
              alt="momo"
              className="w-16"
            />
            <img
              src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg"
              alt="momo"
              className="w-14"
            />
            <img
              src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg"
              alt="momo"
              className="w-8"
            />
            và nhiều hình thức thanh toán khác
          </a>
          </div>
          <div className="flex w-full flex-col items-center  bg-gray-200">
            <div className="container flex-col items-center justify-center px-[20px] py-4">
              {/* <!-- Social media --> */}
              <div className="flex w-full items-center gap-2 border-b-[1px] border-gray-300 pb-4">
                <a href="" className="">
                  <img
                    src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg"
                    alt=""
                    className="w-6"
                  />
                </a>
                <a href="" className="">
                  <img
                    src="https://cdn.divineshop.vn/static/20334129395885adefc2e5217043f670.svg"
                    alt=""
                    className="w-6"
                  />
                </a>
                <a href="" className="">
                  <img
                    src="https://cdn.divineshop.vn/static/4ae438165f9d5ea0fc6ff3da6051f938.svg"
                    alt=""
                    className="w-6"
                  />
                </a>
              </div>
              {/* <!-- contacts & infos --> */}
              <div className="flex w-full flex-wrap gap-8 ">
                {/* <!-- Introduction --> */}
                <div className="flex min-w-[150px] basis-[20%] flex-col">
                  <h1 className="text-[.9rem] font-semibold uppercase">
                    Giới thiệu
                  </h1>
                  <div className="mt-[10px] text-[.85rem]">
                    <a href="#" className="block hover:underline">
                      Game bản quyền là gì?
                    </a>
                    <a href="#" className="block hover:underline">
                      Giới thiệu Divine Shop
                    </a>
                    <a href="#" className="block hover:underline">
                      Điều khoản dịch vụ
                    </a>
                    <a href="#" className="block hover:underline">
                      Chính sách bảo mật
                    </a>
                  </div>
                </div>
                {/* <!-- Account --> */}
                <div className="flex min-w-[150px] basis-[20%] flex-col">
                  <h1 className="text-[.9rem] font-semibold uppercase">
                    TÀI KHOẢN
                  </h1>
                  <div className="mt-[10px] text-[.85rem]">
                    <a href="#" className="block hover:underline">
                      Đăng nhập
                    </a>
                    <a href="#" className="block hover:underline">
                      Đăng ký
                    </a>
                  </div>
                </div>
                {/* <!-- Contacts --> */}
                <div className="flex flex-col">
                  <h1 className="text-[.9rem] font-semibold uppercase">
                    LIÊN HỆ
                  </h1>
                  <div className="mt-[10px] text-[.85rem]">
                    <p className="text-[.85rem] font-semibold">
                      Hotline{" "}
                      <span>
                        <a href="#" className="text-red-600 hover:underline">
                          1900 633 305
                        </a>
                      </span>
                    </p>
                    <p className="">(Các ngày trong tuần từ 8h đến 24h)</p>
                    <a href="#" className="block hover:underline">
                      Địa chỉ giao dịch trực tiếp
                    </a>
                    <a href="#" className="block hover:underline">
                      Fanpage CSKH
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
