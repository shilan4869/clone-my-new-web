import { useEffect, useState } from "react"

const myApi =
  "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/header/menu"
const Menu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch(myApi)
      .then((res) => res.json())
      .then((data) => {
        const newMenu = data.list.map((v, i) => (
          <a
            href={"https://divineshop.vn" + v.href}
            className="flex items-center flex-grow rounded-[3px] pl-2 hover:bg-gray-100 cursor-pointer "
            key={i}
          >
            <img
              src={"https://cdn.divineshop.vn" + v.icon}
              loading="lazy"
              alt=""
              className=" w-[18px] opacity-60 mr-[10px] "
            />
            <div className="overflow-hidden whitespace-pre text-ellipsis  leading-[24.5px]">
              {v.text}
            </div>
          </a>
        ))
        setMenu(newMenu)
      })
  }, [])

  return (
    <div className="menu bg-white basis-[20%] rounded-[5px] border-[1px] border-gray-200 p-[8px]  text-[1rem]">
      <div className="hidden lg:flex flex-col justify-between h-full">{menu}</div>
    </div>
  )
}

export default Menu
