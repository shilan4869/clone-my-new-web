import { memo } from "react"

const SecondBanner = ({banners}) => {
  
  if (!banners) {return}

  return (
    <div className="flex basis-full justify-between lg:flex-col lg:basis-[25%] gap-[20px]">
      <a href={banners[0].href.includes('http')?banners[0].href:("https://divineshop.vn"+banners[0].href)} className="lg:w-full ">
        <img
          src={"https://cdn.divineshop.vn"+banners[0].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
      <a href={banners[1].href.includes('http')?banners[1].href:("https://divineshop.vn"+banners[1].href)} className="lg:w-full ">
        <img
          src={"https://cdn.divineshop.vn"+banners[1].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
    </div>
  )
}

export default memo(SecondBanner)
