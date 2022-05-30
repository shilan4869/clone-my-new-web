import { memo } from "react"

const SecondBanner = ({banners}) => {
  
  if (!banners) { 
    return <div className="flex basis-full justify-between lg:flex-col lg:basis-[25%] gap-[20px]"></div>
 
  }

  return (
    <div className="flex basis-full justify-between lg:flex-col lg:basis-[25%] gap-[20px]">
      <a href={(banners[0].href.includes('http')?banners[0].href:("https://divineshop.vn"+banners[0].href)) || '#'} className="lg:w-full lg:min-w-[200px] ">
        <img
          src={("https://cdn.divineshop.vn"+banners[0].image) || 'https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Adobe1404-31587.png?hash=1649906832'}
          alt=""
          className="rounded-[5px]"
        />
      </a>
      <a href={(banners[1].href.includes('http')?banners[1].href:("https://divineshop.vn"+banners[1].href)) || '#'} className="lg:w-full lg:min-w-[200px] ">
        <img
          src={("https://cdn.divineshop.vn"+banners[1].image) || 'https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Adobe1404-31587.png?hash=1649906832'}
          alt=""
          className="rounded-[5px]"
        />
      </a>
    </div>
  )
}

export default memo(SecondBanner)
