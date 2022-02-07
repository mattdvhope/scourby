import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/global.css";

const Header = ({ setOpenModal }) => {
  const LogoImage = `https://res.cloudinary.com/dwpkckmyf/image/upload/v1644251334/Bible%20App%20Joy/bajoy-log_xicz77.jpg`;
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg w-40 mb-4" to="/">
          <img className="image-blurred-edge" src={LogoImage} alt="logo catalog logo"/>
        </Link>
        <div className="flex flex-col items-center md:flex-row">
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/">
            Categories
          </Link>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/products">
            Products
          </Link>
          <button
            className="mx-2 mb-2 md:mb-0 text-lg"
            onClick={() => setOpenModal(true)}
          >
            Search
          </button>
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4" />
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
