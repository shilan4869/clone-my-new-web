import React, { useEffect, useState } from "react"

let greeting = [
  <a href="https://divineshop.vn" className="hover:underline ads" key={null}>
    Chào mừng bạn đến với Divine Shop
  </a>,
]
let newInterval = () => {}
const AdsSlider = () => {
  const [index, setIndex] = useState(0)
  const [elements, setElements] = useState([])
  const [isPaused, setPause] = useState(false)

  const timer = 3000

  const incIndex = () => {
    if (!isPaused) {
      setIndex(count => count < elements.length - 1 ? count+1 : 0)
    }
  }
  
  const startInterval = () => {
    const interval = setInterval(() => {
      incIndex()
    }, timer);

    return interval
  }
 

//USE https://scors-anywhere.herokuapp.com TO BYPASS CORS
    useEffect(() => {
      fetch(
        "https://scors-anywhere.herokuapp.com/https://divineshop.vn/api/header/news"
      )
        .then((res) => res.json())
        .then((ads) => {
          const newElements = ads.list.map((ad, index) => (
            <a href={ad.href} className="hover:underline ads" key={index}>
              {ad.text}
            </a>
          ))

          setElements(newElements)
        })
    }, [])
//CLEAR INTERVAL WHEN PAUSED AND START A NEW INTERVAL WHEN UNPAUSED
    useEffect(() => {
    
      newInterval = startInterval() 

      if (elements.length < 1 || isPaused) {
        clearInterval(newInterval)
      }

      return () => {
        clearInterval(newInterval)
      }
    }, [elements,isPaused])

    return (
      <div className="flex items-center ads-text-slider"
      onMouseEnter={()=>{setPause(true)}}
      onMouseLeave={()=>{setPause(false)}}
     >
        <button className="w-[14px] h-[14px] opacity-80 hover:opacity-100 bg-no-repeat invert bg-[url('https://divineshop.vn/static/210e9ef2c6a16eb8a6d59f1568a29aea.svg')]"></button>
        <button className="w-[14px] h-[14px] opacity-80 hover:opacity-100 bg-no-repeat invert bg-[url('https://divineshop.vn/static/b9dedff6f5696bed08d031533a971f59.svg')]"></button>
        {elements[index] || greeting}
      </div>
    )
  }

export default AdsSlider
