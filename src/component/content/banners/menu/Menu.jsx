import { useEffect, useState } from "react"

const myApi = "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/header/menu"
const Menu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch(myApi)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        const newMenu = data.list.map((v, i) => 
        <div className="flex items-center cursor-pointer">
            <img src={"https://cdn.divineshop.vn" + v.icon} 
            loading="lazy"
            alt=""
            className="h-[18px] w-[18px] opacity-60 mr-[10px]"
            />
            <h3 className="max-w-[200px] text-[1rem] leading-7 overflow-hidden whitespace-nowrap">{v.text}</h3>
        </div>)
        setMenu(newMenu)
      })
  }, [])

  return (
    <div className="menu hidden lg:block bg-white w-[20%] rounded-[5px] border-[1px] border-gray-200 px-[15px] py-[8px]">
        {menu}
    </div>
  )
}

export default Menu
