import React from "react"
import MktItem from "../components/MktItem"

const PlaceToStay = () => {
  const imgSrcs = [
    "/img/mktplace-img-1.png",
    "/img/mktplace-img-2.png",
    "/img/mktplace-img-3.png",
    "/img/mktplace-img-4.png",
    "/img/mktplace-img-5.png",
    "/img/mktplace-img-6.png",
    "/img/mktplace-img-7.png",
    "/img/mktplace-img-8.png",
    "/img/mktplace-img-9.png",
    "/img/mktplace-img-10.png",
    "/img/mktplace-img-11.png",
    "/img/mktplace-img-12.png",
    "/img/mktplace-img-13.png",
    "/img/mktplace-img-14.png",
    "/img/mktplace-img-15.png",
    "/img/mktplace-img-16.png",
  ]

  return (
    <div>
      <section className="mkt-grid">
        <nav>
          <ul>
            <li>
              <a href="/marketplace">Restaurant</a>
            </li>
            <li>
              <a href="/marketplace">Cottage</a>
            </li>
            <li>
              <a href="/marketplace">Castle</a>
            </li>
            <li>
              <a href="/marketplace">Fantasy city</a>
            </li>
            <li>
              <a href="/marketplace">Beach</a>
            </li>
            <li>
              <a href="/marketplace">Cabins</a>
            </li>
            <li>
              <a href="/marketplace">Off grid</a>
            </li>
            <li>
              <a href="/marketplace">Farm</a>
            </li>

            <li>
              <a href="/marketplace">
                Location <img src="icons/menu.svg" alt="" className="icon" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="mkt-items">
          {imgSrcs.map((el) => {
            return <MktItem src={el} />
          })}
        </div>
      </section>
    </div>
  )
}

export default PlaceToStay
