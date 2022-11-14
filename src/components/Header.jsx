import { useNavigate } from "react-router-dom"

export const Header = ({ setModalIsOpen, setSidebarIsOpen }) => {
  const handleBtnClick = () => {
    setModalIsOpen(true)
  }
  const handleIconClick = () => {
    setSidebarIsOpen(true)
  }

  return (
    <div className="header">
      <a href="">
        <img src="/img/meta-logo.svg" alt="" className="logo" />
      </a>

      <img
        src="/icons/menu.svg"
        alt=""
        className="icon"
        onClick={handleIconClick}
      />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/marketplace">Place to stay</a>
          </li>
          <li>
            <a href="/">NFTs</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
        </ul>
      </nav>
      <div onClick={handleBtnClick}>Connect wallet</div>
    </div>
  )
}
