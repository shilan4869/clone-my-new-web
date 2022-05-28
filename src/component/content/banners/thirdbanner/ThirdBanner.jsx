import { memo } from "react"

const ThirdBanner = ({ banners }) => {
  if (!banners) {
    return
  }

  return (
    <div className="container flex-wrap md:flex-nowrap">
      <a
        href={
          banners[2].href.includes("http")
            ? banners[2].href
            : "https://divineshop.vn" + banners[2].href
        }
        className="md:col-4 basis-[calc(50%-10px)]"
      >
        <img
          src={"https://cdn.divineshop.vn" + banners[2].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
      <a
        href={
          banners[3].href.includes("http")
            ? banners[3].href
            : "https://divineshop.vn" + banners[3].href
        }
        className="md:col-4 basis-[calc(50%-10px)]"
      >
        <img
          src={"https://cdn.divineshop.vn" + banners[3].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
      <a
        href={
          banners[4].href.includes("http")
            ? banners[4].href
            : "https://divineshop.vn" + banners[4].href
        }
        className="md:col-4 basis-[calc(50%-10px)]"
      >
        <img
          src={"https://cdn.divineshop.vn" + banners[4].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
      <a
        href={
          banners[5].href.includes("http")
            ? banners[5].href
            : "https://divineshop.vn" + banners[5].href
        }
        className="md:col-4 basis-[calc(50%-10px)]"
      >
        <img
          src={"https://cdn.divineshop.vn" + banners[5].image}
          alt=""
          className="rounded-[5px]"
        />
      </a>
    </div>
  )
}
export default memo(ThirdBanner)
