import React from "react"
import MktItem from "../components/MktItem"

const Home = () => {
  const imgSrcs = [
    "/img/mktplace-img-5.png",
    "/img/mktplace-img-6.png",
    "/img/mktplace-img-7.png",
    "/img/mktplace-img-8.png",
    "/img/mktplace-img-1.png",
    "/img/mktplace-img-2.png",
    "/img/mktplace-img-3.png",
    "/img/mktplace-img-4.png",
  ]

  return (
    <div className="home">
      <section className="section-1">
        <div>
          <img src="/img/group-1.png" alt="" />
        </div>
        <div>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="input">
            <input type="text" placeholder="Search for location" id="" />
            <button>Search</button>
          </div>
        </div>
      </section>
      <div className="banner">
        <img src="/img/mbtoken-logo.svg" alt="" />
        <img src="/img/metamask-logo.svg" alt="" />
        <img src="/img/opensea-logo.svg" alt="" />
      </div>
      <section className="section-2">
        <h1>Inspiration for your next adventure</h1>
        <div className="mkt-items">
          {imgSrcs.map((el) => {
            return <MktItem src={el} />
          })}
        </div>
      </section>
      <section className="section-3">
        <div>
          <img src="/img/group-2.png" alt="" />
        </div>
        <div>
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn More</button>
        </div>
      </section>
    </div>
  )
}

export default Home
