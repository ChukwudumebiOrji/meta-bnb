import React from "react"

const MktItem = ({ src }) => {
  return (
    <div className="mkt-item">
      <img src={src} alt="" />
      <div className="details">
        <p>desert king</p>
        <h4>1MBT per night</h4>
      </div>
      <div className="details">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className="stars">
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
        <img src="/icons/star.svg" alt="" />
      </div>
    </div>
  )
}

export default MktItem
