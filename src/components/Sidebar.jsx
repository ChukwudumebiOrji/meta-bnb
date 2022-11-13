import React from "react"

export const Sidebar = ({ setSidebarIsOpen, setModalIsOpen }) => {
  const handleIconClick = () => {
    setSidebarIsOpen(false)
  }
  const handleBtnClick = () => {
    setSidebarIsOpen(false)
    setModalIsOpen(true)
  }

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <img
          src="/icons/close.svg"
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
    </div>
  )
}
