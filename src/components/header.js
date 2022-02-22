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
      </div>
      <hr className="mt-1 m-auto w-24 border-t-4" />
    </header>
  )
}

Header.propTypes = {
  sitename: PropTypes.string,
}

Header.defaultProps = {
  sitename: ``,
}

export default Header
