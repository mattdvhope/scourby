import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "~/components/image"
import "~/styles/global.css";

const Header = ({ setOpenModal, sitename, metadata }) => {
  const LogoImage = `https://res.cloudinary.com/dwpkckmyf/image/upload/v1644251334/Bible%20App%20Joy/bajoy-log_xicz77.jpg`;
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg w-40 mb-4" to="/">
          <img className="image-blurred-edge" src={LogoImage} alt="logo catalog logo"/>
        </Link>
      </div>
      <hr className="mt-1 m-auto w-24 border-t-4" />


      <div className="centered-div">
        <div className="app-links">
          <div className="apple-app-store-image">
            <Link to="/order">
              <Image
                alt="App Store Image"
                image={metadata.apple_app_store}
              />
            </Link>
          </div>

          <div className="google-play-store-image">
            <Link to="/order">
              <Image
                alt="App Store Image"
                image={metadata.google_play_store}
              />
            </Link>
          </div>
        </div>
      </div>


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
