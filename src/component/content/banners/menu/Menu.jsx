import { useEffect, useState } from "react"

const myApi = "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/header/menu"
const Menu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch(myApi)
      .then((res) => res.json())
      .then((data) => {
          console.log('Menu: ',data);
        const newMenu = data.list.map((v, i) => 
        <a 
        href={"https://divineshop.vn" + v.href} 
        className="flex items-center flex-grow rounded-[3px] pl-2 hover:bg-gray-100 cursor-pointer max-h-[30px]"
        key={i}>
            <img src={"https://cdn.divineshop.vn" + v.icon} 
            loading="lazy"
            alt=""
            className=" w-[18px] opacity-60 mr-[10px] "
            />
            <div className="overflow-hidden whitespace-pre text-ellipsis  leading-[24.5px]">{v.text}</div>
        </a>
       )
        setMenu(newMenu)
      })
  }, [])

  return (
    <div className="menu hidden lg:flex flex-col justify-between bg-white basis-[20%] rounded-[5px] border-[1px] border-gray-200 p-[8px]  h-full  text-[1rem]">
        {menu}
    </div>
  )
}

export default Menu
