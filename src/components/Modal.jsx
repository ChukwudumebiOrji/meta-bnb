import React from "react"

export const Modal = ({ setModalIsOpen }) => {
  const handleClose = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <span>Connect Wallet</span>
          <img
            src="/icons/close.svg"
            alt=""
            className="icon"
            onClick={handleClose}
          />
        </div>
        <div className="modal__content__content">
          <p>Choose your preferred wallet:</p>
          <div>
            <span>
              <img src="/img/metamask.svg" alt="" /> <span>Metamask</span>
            </span>
            <img src="/icons/chevron-right.svg" alt="" className="icon" />
          </div>
          <div>
            <span>
              <img src="/img/walletconnect.svg" alt="" />{" "}
              <span>WalletConnect</span>
            </span>
            <img src="/icons/chevron-right.svg" alt="" className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
