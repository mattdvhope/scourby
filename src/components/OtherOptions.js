import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/global.css";

const OtherOptions = ({ setOpenModal }) => {
  const LogoImage = `https://res.cloudinary.com/dwpkckmyf/image/upload/v1644251334/Bible%20App%20Joy/bajoy-log_xicz77.jpg`;
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:flex-row">
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/">
            Categories
          </Link>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/products">
            Products
          </Link>
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4" />
    </header>
  )
}

OtherOptions.propTypes = {
  siteName: PropTypes.string,
}

OtherOptions.defaultProps = {
  siteName: ``,
}

export default OtherOptions
