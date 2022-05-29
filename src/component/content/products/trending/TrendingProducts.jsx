import { memo, useEffect, useState } from "react"

const TrendingProducts = ({ featuredProductsAPI }) => {
  const [products, setProducts] = useState([])

  const productAPI =
  featuredProductsAPI ||
    "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/product/list?slug=featured"
  const defaultURL =
    "https://steamcdn-a.akamaihd.net/steam/apps/1446780/header.jpg"
  const defaultHref = "https://divineshop.vn"

  useEffect(() => {
    console.log('fetching API...:',productAPI,);
    fetch(productAPI)
      .then((res) => res.json())
      .then((data) => {
        const newProducts = data.list.map((v, i) => (
          <div
            className="product-img flex flex-col gap-[10px] col-2 md:basis-[calc(33.33333%-13.333px)] lg:basis-[calc(25%-15px)]"
            key={v.id}
            
          >
            <a href={"https://divineshop.vn/" + v.slug}>
              <img
                src={
                  v.image.includes("http")
                    ? v.image
                    : "https://divineshop.vn" + v.image || defaultURL
                }
                alt=""
                className="rounded-[5px]"
              />
            </a>
            <a
              href={"https://divineshop.vn/" + v.slug}
              className="product-link  hover:underline"
            >
              {v.name}
            </a>
            <div className="price">
              <div className="current-price">{v.price.toLocaleString('vi-VN')+'đ'}</div>
              <div className="standard-price">{v.originalPrice.toLocaleString('vi-VN')+'đ'}</div>
              <div className="discount-percent">
                {'-'+Math.ceil(100*(v.originalPrice-v.price)/v.originalPrice)+'%'}
              </div>
            </div>
          </div>
        ))
        setProducts(products.concat(newProducts))
      })
  }, [productAPI])

  return <div className="container flex-wrap !items-start !justify-start text-[.9rem] flex-grow-0">{products}</div>
}

export default memo(TrendingProducts)
