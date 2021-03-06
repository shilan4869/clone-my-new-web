import React, { useEffect, useRef, useState, memo } from "react"

let greeting = [
  <a href="https://divineshop.vn" className="hover:underline ads" key={null}>
    Chào mừng bạn đến với Divine Shop
  </a>,
]

const AdsSlider = () => {
  const greeting = useRef([
    <a href="https://divineshop.vn" className="hover:underline ads" key={null}>
      Chào mừng bạn đến với Divine Shop
    </a>,
  ])
  const newInterval = useRef()
  const timer = 3000

  const [index, setIndex] = useState(0)
  const [elements, setElements] = useState([])
  const [isPaused, setPause] = useState(false)

  const incIndex = () => {
    setIndex((count) => (count < elements.length - 1 ? count + 1 : 0))
  }

  const decreaseIndex = () => {
    setIndex((count) => (count > 0 ? count - 1 : elements.length - 1))
  }

  const startInterval = () => {
    const interval = setInterval(() => {
      incIndex()
    }, timer)

    return interval
  }

  //USE https://scors-anywhere.herokuapp.com TO BYPASS CORS
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://divineshop.vn/api/header/news"
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
    if (elements.length > 1 && !isPaused) {
      newInterval.current = startInterval()
    }

    return () => {
      clearInterval(newInterval.current)
    }
  }, [elements, isPaused])

  return (
    <div
      className="flex items-center ads-text-slider"
      onMouseEnter={() => {
        setPause(true)
      }}
      onMouseLeave={() => {
        setPause(false)
      }}
    >
      <button
        className="w-[14px] h-[14px] opacity-80 hover:opacity-100 bg-no-repeat invert bg-[url('https://divineshop.vn/static/210e9ef2c6a16eb8a6d59f1568a29aea.svg')]"
        onClick={decreaseIndex}
      ></button>
      <button
        className="w-[14px] h-[14px] opacity-80 hover:opacity-100 bg-no-repeat invert bg-[url('https://divineshop.vn/static/b9dedff6f5696bed08d031533a971f59.svg')]"
        onClick={incIndex}
      ></button>
      {elements[index] || greeting.current}
    </div>
  )
}

export default memo(AdsSlider)
