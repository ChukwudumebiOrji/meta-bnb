import React from "react"

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src="/img/meta-footer.svg" alt="" />
        <div>
          <img src="/icons/facebook.svg" alt="" className="icon" />
          <img src="/icons/instagram.svg" alt="" className="icon" />
          <img src="/icons/twitter.svg" alt="" className="icon" />
        </div>
        <p>
          <span>&copy;</span> 2022 Metabnb
        </p>
      </div>
      <div className="footer__links">
        <div>
          <h2>Community</h2>
          <ul>
            <li>
              <a href="">NFT</a>
            </li>
            <li>
              <a href="">Tokens</a>
            </li>
            <li>
              <a href="">Landlords</a>
            </li>
            <li>
              <a href="">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Places</h2>
          <ul>
            <li>
              <a href="">Castle</a>
            </li>
            <li>
              <a href="">Farms</a>
            </li>
            <li>
              <a href="">Beach</a>
            </li>
            <li>
              <a href="">Learn more</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="">Road map</a>
            </li>
            <li>
              <a href="">Creators</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
